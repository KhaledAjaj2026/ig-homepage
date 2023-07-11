import './image-post.scss';

export default function ImagePost() {
    return (
        <>
            <div id='image-post_component'>
                <hr className='image-bar' />
                <img className='image-post' src="src/assets/post1-imagePost.jpeg" alt="" />
                <hr className='image-bar' />
            </div>
        </>
    )
}