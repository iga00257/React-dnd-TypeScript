import React from "react";
import TaskboardCard from "../dragcard/TaskboardCard";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../Constants";
import { Droppable,Draggable,DragDropContext } from "react-beautiful-dnd";
import Card from "../card/Card";

{/* <Droppable droppableId="id">
  {
    provided => (
    	<List
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
      	{provided.placeholder}
      </List>
    )
  }
</Droppable> */}

const BdndTaskboardColumn = (props:any)=>{
    const { tasks:{title,tasks} , columnIndex ,onDragEnd,handleMoveTask} = props
    // console.log(tasks)
    // console.log(columnIndex)
    

    const cards =  tasks.map((task, index) => {
        return(
        // 以 map 方式渲染每個拖曳卡片 (Draggable)
                  
        <Draggable draggableId={task+String(index)} key={task+String(index)} index={index} >
          {/* // draggableId: 該卡片的唯一識別ID */}
          {(provided, snapshot) => (
            /* 
              ...provided.droppableProps
              ...provided.draggableProps
              ...provided.dragHandleProps 
              單純展開其他必要的 props 
            */
            
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              
              {/* 實際上的卡片內容 */}
              <Card task={task} empty={props.empty}/>
              {/* {item} */}
              {/* 實際上的卡片內容 */}

            </div>
          )}
        </Draggable>
      )})

    // const cards = tasks.map((task:any, index:Number) => {
    //     const propsToTaskboardCard = { task, columnIndex, index };
    //     return (
    //       <TaskboardCard
    //         key={`${columnIndex} ${index} ${task}`}
    //         {...propsToTaskboardCard}
    //       />
    //     );
    //   });
    return (
    <Droppable droppableId={`${columnIndex}`} key={`${columnIndex}`}>
    {/* // droppableId: 該 Droppable 的唯一識別ID */}
    

    {(provided, snapshot) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        <div ref={provided.innerRef} className=" h-auto flex flex-col bg-slate-100 mr-3 px-4 py-3 border rounded focus:outline-none">
          <p className=" font-bold mt-1 mr-0 mb-5">{title}</p>
          <div>{cards}</div>
          <div className="column__add-task-input">
            <input className=" px-5 py-5 w-72 mb-2 rounded shadow" type="text" placeholder="Type task here ..." />
            <button className=" py-4 px-16 border border-solid bg-slate-300 rounded ">Add Task</button>
          </div>
        </div>
        {/*
          provided.innerRef
          套件的機制所需, 直接去取用 dom 的 ref, 就是套用的例行公事
        */}
      </div>
    )}
  </Droppable>
      );
}

export default BdndTaskboardColumn;
