import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import FeedbackData from "../Data/FeedbackData";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";

const FeadbackPage = () => {
    const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <div>
       <Header text={true} />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  )
}

export default FeadbackPage
