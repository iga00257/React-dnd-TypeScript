import React from "react";
import TaskboardCard from "../dragcard/TaskboardCard";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../Constants";


const TaskboardColumn = (props:any)=>{
    const { tasks:{title,tasks} , columnIndex ,handleMoveTask} = props

    const cards = tasks.map((task:any, index:Number) => {
        const propsToTaskboardCard = { task, columnIndex, index };
        return (
          <TaskboardCard
            key={`${columnIndex} ${index} ${task}`}
            {...propsToTaskboardCard}
          />
        );
      });
    const [{},dropRef] = useDrop({
        accept:ItemTypes.CARD,
        drop: item => {
            const from = item;
            const to = { columnIndex };
            handleMoveTask(from, to);
          },
        canDrop: item => item.columnIndex !== columnIndex
    })
    return (
        <div ref={dropRef} className=" h-auto flex flex-col bg-slate-100 mr-3 px-4 py-3 border rounded focus:outline-none">
          <p className=" font-bold mt-1 mr-0 mb-5">{title}</p>
          <div>{cards}</div>
          <div className="column__add-task-input">
            <input className=" px-5 py-5 w-72 mb-2 rounded shadow" type="text" placeholder="Type task here ..." />
            <button className=" py-4 px-16 border border-solid bg-slate-300 rounded ">Add Task</button>
          </div>
        </div>
      );
}

export default TaskboardColumn;
