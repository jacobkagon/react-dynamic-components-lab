//your code here
import React from "react";

const Comment = function (props) {
  console.log(props.children);
  return <div className="comment"> {props.commentText} </div>;
};

// export default Comment;



export { Comment as default };

