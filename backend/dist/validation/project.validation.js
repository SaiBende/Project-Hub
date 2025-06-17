"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectSchema = exports.createProjectSchema = exports.githuburlSchema = exports.projectIdSchema = exports.descriptionSchema = exports.nameSchema = exports.emojiSchema = void 0;
const zod_1 = require("zod");
exports.emojiSchema = zod_1.z.string().trim().optional();
exports.nameSchema = zod_1.z.string().trim().min(1).max(255);
exports.descriptionSchema = zod_1.z.string().trim().optional();
exports.projectIdSchema = zod_1.z.string().trim().min(1);
exports.githuburlSchema = zod_1.z.string().trim().optional();
exports.createProjectSchema = zod_1.z.object({
    emoji: exports.emojiSchema,
    name: exports.nameSchema,
    description: exports.descriptionSchema,
    githuburl: exports.githuburlSchema,
});
exports.updateProjectSchema = zod_1.z.object({
    emoji: exports.emojiSchema,
    name: exports.nameSchema,
    description: exports.descriptionSchema,
    githuburl: exports.githuburlSchema,
});
