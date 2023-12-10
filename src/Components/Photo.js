import React from "react";
import PropTypes from "prop-types";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button className="button" onClick={() => props.onRemovePhoto(post)}>
          Remove
        </button>
      </div>
    </figure>
  );
}

//PropType

// In React, PropTypes is a mechanism for documenting and validating the data types of properties passed to React components.
// It helps ensure that the components receive the expected types of data,
// and it can provide warnings or errors during development if the types don't match.

Photo.prototype = {
  Post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

// class Photo extends React.Component {
//   render() {
//     const post = this.props.post;
//     return (
//       <figure className="figure">
//         <img className="photo" src={post.imageLink} alt={post.description} />
//         <figcaption>
//           <p>{post.description}</p>
//         </figcaption>
//         <div className="button-container">
//           <button className="button">Remove</button>
//         </div>
//       </figure>
//     );
//   }
// }

export default Photo;
