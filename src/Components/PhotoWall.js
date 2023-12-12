import React from "react";
import Photo from "./Photo";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        {" "}
        click me
      </Link>

      {/* <button className="addIcon" onClick={props.onNavigate}>
        +
      </button> */}
      <div className="photoGrid">
        {props.posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

//PropType

// In React, PropTypes is a mechanism for documenting and validating the data types of properties passed to React components.
// It helps ensure that the components receive the expected types of data,
// and it can provide warnings or errors during development if the types don't match.

PhotoWall.prototype = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
