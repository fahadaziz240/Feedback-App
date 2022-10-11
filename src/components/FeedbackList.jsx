import { motion, AnimatePresence } from "framer-motion";
import FeedbackItems from "./FeedbackItems"
import PropTypes from "prop-types";


function FeedbackList( {feedback ,handleDelete}) {
    if(!feedback || FeedbackList.length === 0){
        return "No feedback";
    }
  return (
    <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item)=> (
            <motion.div key={item.id} 
            initial={{opacity:0}}
            animate= {{opacity:1}}
            exit= {{opacity:0}}>
            <FeedbackItems key={item.id} item={item} 
             handleDelete ={handleDelete}
             
        />
        </motion.div>        
       ) )}
    </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes = {
    feedback:PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
        
}))
}

export default FeedbackList
