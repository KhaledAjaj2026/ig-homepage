import './image-post.scss';
import postInfo from '../../posts.json';

export default function ImagePost() {
    return (
        <>
            <div id='image-post_component'>
                <hr className='image-bar' />
                <img className='image-post' src={postInfo.post1['posted-image']} alt="" />
                <hr className='image-bar' />
            </div>
        </>
    )
}