import "./account.scss";
import postInfo from '../../posts.json';

export default function Account() {
  return (
    <>
      <div id="account-component">
        <img src={postInfo.post1["profile-pic"]} alt="" className="prof-pic" width="50" height="50" />
        <p className="username">{postInfo.post1.username}</p>
      </div>
    </>
  );
}
