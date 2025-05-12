import React from 'react'
import CalendarBox from '@/components/workspace/workspace-calendar'
function Calendar() {
  return (
    <div className="w-full h-full flex-col space-y-8 pt-3">
    <div className="flex items-center justify-between space-y-2">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Workspace Calendar</h2>
        <p className="text-muted-foreground">
          Here&apos;s the Calendar for this workspace!
        </p>
      </div>

    </div>
    {/* {Task Table} */}
    <div>
      <CalendarBox />
    </div>
  </div>
      
    
  )
}

export default Calendar
