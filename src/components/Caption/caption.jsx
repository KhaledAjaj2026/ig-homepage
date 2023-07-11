import './caption.scss';
import postInfo from '../../posts.json';

export default function Caption() {
    return (
        <>
            <div id='caption-component'>
                <hr className='caption-bar' />
                <p className="caption">{postInfo.post1.caption}</p>
            </div>
        </>
    )
}