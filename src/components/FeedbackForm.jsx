import { useState } from "react";
import Card from "../PortionComponent/Card"
import Button from "../PortionComponent/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({handleAdd}) => {
    const [text ,setText]= useState('')
    const [rating, setRating] = useState(10)
    const [bntDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('Hello')

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setText('')
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(false)
            setMessage("Message should be atleast 10 character")
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
 const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10 ){
        const newFeedback ={
            text,
            rating,
    }
    handleAdd(newFeedback);
    setText('');
 }
}
  return (
    <div>
       <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select= {(rating) => setRating(rating)} />
        <div className="input-group">
            <input type="text" value={text} onChange={handleTextChange} placeholder="Write a review" />
            <Button type="submit" isDisabled={bntDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
        </form>
        </Card>
      
    </div>
  )
}


export default FeedbackForm 
