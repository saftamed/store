import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addComment } from "../store/userApi";

function AddComment({productId}) {
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState("");
    const [show, setShow] = React.useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(dispatch,{rating,comment,productId});
        setComment("");
        setRating(0);
    }
  return (
    <div className="comment">
      <div className="details">
        <div className="summary">
            <div>
                <h2>Customer Reviews</h2>
                <button className="btn" onClick={(e) => setShow(!show)} > Add a comment</button>
            </div>
        </div>
        <div className="addForm" style={{height:show? "300px":"0px" }}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                    <label>Your comment</label>
                    <textarea className="form-control" rows="3" required onChange={(e) => setComment(e.target.value)} ></textarea>
                    <ReactStars
                        count={5}
                        size={32}
                        edit={true}
                        onChange={(value) => setRating(value)}
                        value={4}
                        activeColor="#ffd700"
                    />
                    <input type="submit" className="btn"  value="Save" />
            </form>

        </div>
        <div className="body">
            <div className="comment-item">
                <div className="comment-item-header">
                    <div className="avatar">
                      A
                    </div>
                    <div className="name">
                      <p>John Doe</p>
                      <p>12/12/2020</p>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={4}
                        activeColor="#ffd700"
                    />
                    </div>
                </div>
                <div className="comment-item-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris eget nisl id libero consectetur fermentum.
                    </p>
                </div>
                                
            </div>
            <div className="comment-item">
                <div className="comment-item-header">
                    <div className="avatar">
                      A
                    </div>
                    <div className="name">
                      <p>John Doe</p>
                      <p>12/12/2020</p>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={4}
                        activeColor="#ffd700"
                    />
                    </div>
                </div>
                <div className="comment-item-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris eget nisl id libero consectetur fermentum.
                    </p>
                </div>
                                
            </div>
        </div>

      </div>
    </div>
  );
}

export default AddComment;
