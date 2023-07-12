import "./image-post.scss";
import PropTypes from "prop-types";

export default function ImagePost({ post }) {
  return (
    <>
      <div id="image-post_component">
        <hr className="image-bar" />
        <img className="image-post" src={post["posted-image"]} alt="" />
        <hr className="image-bar" />
      </div>
    </>
  );
}

ImagePost.propTypes = {
  post: PropTypes.object.isRequired,
};