const basicCard= "w-72 bg-slate-50 mb-3 px-2 py-3 border rounded cursor-pointer shadow-xl"
const emptyStyle =" text-gray-400 bg-gray-200"

function Card(props:any){
    const {task,empty} = props
    return(<div className={`${basicCard}`+`${empty? emptyStyle:''}`}>{task}</div>)

    // return(<div className={`card ` + (empty ? "card--empty" : "")}>{task}</div>)
}
  
export default Card;