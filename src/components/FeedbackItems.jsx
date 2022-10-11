import { FaTimes} from 'react-icons/fa';
import Card from "../PortionComponent/Card";
import PropTypes from "prop-types"
function FeedbackItems({item , handleDelete}) {
 
    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick ={()=>handleDelete(item.id)} className='close'><FaTimes color='purple' /></button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItems.propTypes = {
item: PropTypes.object.isRequired,
}

export default FeedbackItems
