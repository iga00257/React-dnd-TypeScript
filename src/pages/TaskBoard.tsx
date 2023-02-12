import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import BdndTaskboardColumn from "../components/column/BeautifulDndColumn";

const TaskBoard = props => {
  const [myTasks, moveMyTask] = useState(props.tasks);
  const handleMoveTask = (from, to) => {
    const {task, columnIndex:fromColumnIndex,index} =from;
    const { columnIndex: toColumnIndex} = to;
    const newTasks = [ ...myTasks];
    //remove 
    newTasks[fromColumnIndex].tasks.splice(index,1)
    //move 
    newTasks[toColumnIndex].tasks.push(task);
    moveMyTask(newTasks)
  }
  const onDragEnd = (e)=>{
    console.log(e)
    const {source,destination} = e
    console.log(source.index)
    console.log(source.droppableId)

    if (!destination) {
        return;
      }
    // 拷貝新的 items (來自 state) 
    let newTasks = [...myTasks];  

    // console.log(newTasks)
    		// 用 splice 處理拖曳後資料, 組合出新的 items
    // splice(start, deleteCount, item )

    // 從 source.index 剪下被拖曳的元素
    console.log(newTasks)
    const [removeItem] = newTasks[source.droppableId].tasks.splice(source.index,1)
    console.log(removeItem)
    newTasks[destination.droppableId].tasks.splice(
        destination.index,
        0,
        removeItem
      );
    // newTasks[destination.droppableId].tasks.push(removeItem);

    // /newTasks.splice(source.droppableId, 1)[source.index];
    // console.log(newTasks)
    // console.log(remove)
    //在 destination.index 位置貼上被拖曳的元素
    // console.log(newTasks[destination.droppableId])
    // newTasks[destination.droppableId].splice(destination.index, 1, remove);
    // console.log(newTasks)
    // 設定新的 items
    moveMyTask(newTasks);
  }

  const columns = myTasks.map((tasks:Object, columnIndex:Number) => {
    const propsToColumn = { tasks, columnIndex,handleMoveTask };
    // console.log(propsToColumn)
    return <BdndTaskboardColumn key={`column ${columnIndex}`} {...propsToColumn} />
  });
  return (
    <DragDropContext
    onDragEnd={onDragEnd}
    onDragStart={(e)=>console.log(e)}
    >
        <div className=" flex">{columns}</div>

    </DragDropContext>
  );
};

export default TaskBoard;
