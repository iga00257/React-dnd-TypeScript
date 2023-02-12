
import Card from "../card/Card"
import { ItemTypes} from "../../../Constants"
import { useDrag } from "react-dnd"

function TaskboardCard(props:any){
    // const [{}, dragRef] = useDrag({
    //     item: { type: ItemTypes.CARD, ...props }
    //   });
    const [{ isDragging },dragRef] = useDrag({
        type :'card',
        item: () => ({...props})
    })

    

    return<div ref={dragRef}>
        <Card task={props.task} empty={props.empty}/>
    </div>
}

export default TaskboardCard