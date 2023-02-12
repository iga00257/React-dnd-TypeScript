
import Card from "../card/Card"
import { ItemTypes} from "../../../Constants"

function TaskboardCard(props:any){
    // const [{}, dragRef] = useDrag({
    //     item: { type: ItemTypes.CARD, ...props }
    //   });
    

    return<div ref={dragRef}>
        <Card task={props.task} empty={props.empty}/>
    </div>
}

export default TaskboardCard