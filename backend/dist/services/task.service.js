"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksFromGitHubService = exports.deleteTaskService = exports.getTaskByIdService = exports.getAllTasksService = exports.updateTaskStatusService = exports.updateTaskService = exports.createTaskService = void 0;
const task_enum_1 = require("../enums/task.enum");
const member_model_1 = __importDefault(require("../models/member.model"));
const project_model_1 = __importDefault(require("../models/project.model"));
const task_model_1 = __importDefault(require("../models/task.model"));
const appError_1 = require("../utils/appError");
const createTaskService = async (workspaceId, projectId, userId, body) => {
    const { title, description, priority, status, assignedTo, dueDate } = body;
    const project = await project_model_1.default.findById(projectId);
    if (!project || project.workspace.toString() !== workspaceId.toString()) {
        throw new appError_1.NotFoundException("Project not found or does not belong to this workspace");
    }
    if (assignedTo) {
        const isAssignedUserMember = await member_model_1.default.exists({
            userId: assignedTo,
            workspaceId,
        });
        if (!isAssignedUserMember) {
            throw new Error("Assigned user is not a member of this workspace.");
        }
    }
    const task = new task_model_1.default({
        title,
        description,
        priority: priority || task_enum_1.TaskPriorityEnum.MEDIUM,
        status: status || task_enum_1.TaskStatusEnum.TODO,
        assignedTo,
        createdBy: userId,
        workspace: workspaceId,
        project: projectId,
        dueDate,
    });
    await task.save();
    return { task };
};
exports.createTaskService = createTaskService;
const updateTaskService = async (workspaceId, projectId, taskId, body) => {
    const project = await project_model_1.default.findById(projectId);
    if (!project || project.workspace.toString() !== workspaceId.toString()) {
        throw new appError_1.NotFoundException("Project not found or does not belong to this workspace");
    }
    const task = await task_model_1.default.findById(taskId);
    if (!task || task.project.toString() !== projectId.toString()) {
        throw new appError_1.NotFoundException("Task not found or does not belong to this project");
    }
    const updatedTask = await task_model_1.default.findByIdAndUpdate(taskId, {
        ...body,
    }, { new: true });
    if (!updatedTask) {
        throw new appError_1.BadRequestException("Failed to update task");
    }
    return { updatedTask };
};
exports.updateTaskService = updateTaskService;
const updateTaskStatusService = async (workspaceId, taskId, status) => {
    const task = await task_model_1.default.findOne({
        _id: taskId,
        workspace: workspaceId,
    });
    if (!task) {
        throw new appError_1.NotFoundException("Task not found.");
    }
    task.status = status;
    await task.save();
    return task;
};
exports.updateTaskStatusService = updateTaskStatusService;
const getAllTasksService = async (workspaceId, filters, pagination) => {
    const query = {
        workspace: workspaceId,
    };
    if (filters.projectId) {
        query.project = filters.projectId;
    }
    if (filters.status && filters.status?.length > 0) {
        query.status = { $in: filters.status };
    }
    if (filters.priority && filters.priority?.length > 0) {
        query.priority = { $in: filters.priority };
    }
    if (filters.assignedTo && filters.assignedTo?.length > 0) {
        query.assignedTo = { $in: filters.assignedTo };
    }
    if (filters.keyword && filters.keyword !== undefined) {
        query.title = { $regex: filters.keyword, $options: "i" };
    }
    if (filters.dueDate) {
        query.dueDate = {
            $eq: new Date(filters.dueDate),
        };
    }
    //Pagination Setup
    const { pageSize, pageNumber } = pagination;
    const skip = (pageNumber - 1) * pageSize;
    const [tasks, totalCount] = await Promise.all([
        task_model_1.default.find(query)
            .skip(skip)
            .limit(pageSize)
            .sort({ createdAt: -1 })
            .populate("assignedTo", "_id name profilePicture -password")
            .populate("project", "_id emoji name"),
        task_model_1.default.countDocuments(query),
    ]);
    const totalPages = Math.ceil(totalCount / pageSize);
    return {
        tasks,
        pagination: {
            pageSize,
            pageNumber,
            totalCount,
            totalPages,
            skip,
        },
    };
};
exports.getAllTasksService = getAllTasksService;
const getTaskByIdService = async (workspaceId, projectId, taskId) => {
    const project = await project_model_1.default.findById(projectId);
    if (!project || project.workspace.toString() !== workspaceId.toString()) {
        throw new appError_1.NotFoundException("Project not found or does not belong to this workspace");
    }
    const task = await task_model_1.default.findOne({
        _id: taskId,
        workspace: workspaceId,
        project: projectId,
    }).populate("assignedTo", "_id name profilePicture -password");
    if (!task) {
        throw new appError_1.NotFoundException("Task not found.");
    }
    return task;
};
exports.getTaskByIdService = getTaskByIdService;
const deleteTaskService = async (workspaceId, taskId) => {
    const task = await task_model_1.default.findOneAndDelete({
        _id: taskId,
        workspace: workspaceId,
    });
    if (!task) {
        throw new appError_1.NotFoundException("Task not found or does not belong to the specified workspace");
    }
    return;
};
exports.deleteTaskService = deleteTaskService;
const getTasksFromGitHubService = async (projectId) => {
    const project = await project_model_1.default.findById(projectId);
    if (!project) {
        throw new appError_1.NotFoundException("Project not found.");
    }
    if (!project.githuburl) {
        throw new appError_1.BadRequestException("GitHub URL is not set for this project.");
    }
    const url = `https://api.github.com/repos/${project.githuburl}/issues?state=open&sort=updated&direction=desc`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "User-Agent": "Node.js",
        },
    });
    if (!response.ok) {
        throw new appError_1.BadRequestException("Failed to fetch tasks from GitHub");
    }
    const issues = await response.json();
    if (!issues || issues.length === 0) {
        throw new appError_1.NotFoundException("No issues found in the GitHub repository.");
    }
    if (issues.length > 10) {
        issues.length = 10; // Limit to 10 issues
    }
    // Map GitHub issues to tasks
    const tasks = issues.map((issue) => ({
        title: issue.title,
        description: issue.body,
        priority: task_enum_1.TaskPriorityEnum.MEDIUM,
        status: task_enum_1.TaskStatusEnum.TODO,
        assignedTo: null,
        createdBy: null,
        workspace: project.workspace,
        project: projectId,
        dueDate: null,
    }));
    return tasks;
};
exports.getTasksFromGitHubService = getTasksFromGitHubService;
