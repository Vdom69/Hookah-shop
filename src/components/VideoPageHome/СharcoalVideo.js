
import React from "react";
import PropTypes from "prop-types";

const СharcoalVideo = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="557"
      playing={true}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

СharcoalVideo.propTypes = {};

СharcoalVideo.defaultProps = {};

export default СharcoalVideo;
