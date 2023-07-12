import "./account.scss";
import PropTypes from "prop-types";

export default function Account({ post }) {
  return (
    <>
      <div id="account-component">
        <img src={post['profile-pic']} alt="" className="prof-pic" width="50" height="50" />
        <p className="username">{post.username}</p>
      </div>
    </>
  );
}

Account.propTypes = {
  post: PropTypes.node.isRequired,
};