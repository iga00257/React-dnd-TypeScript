import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaskBoard from './pages/TaskBoard'

function App() {
  const [count, setCount] = useState(0)
  const tasks = [
    {
      title: "todo",
      tasks: ["登入狀態儲存","註冊頁面","註冊mutation"]
    },
    {
      title: "Inprogress",
      tasks: ["連接資料庫", "專案Linter","側邊導航欄","Deploy test Database"]
    },
    {
      title: "Inreview",
      tasks: ["API Route Design"]
    },
    {
      title: "done",
      tasks: []
    }
  ];
  return (
    <div className="font-bold ">
      <div className=' w-[50vw] items-center px-2 py-2'>
      <TaskBoard tasks={tasks}/>

      </div>

    </div>
  )
}

export default App
