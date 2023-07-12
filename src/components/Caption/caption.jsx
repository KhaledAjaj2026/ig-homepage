import './caption.scss';
import PropTypes from 'prop-types';

export default function Caption({ post }) {
    return (
        <>
            <div id='caption-component'>
                <hr className='caption-bar' />
                <p className="caption">{post.caption}</p>
            </div>
        </>
    )
}

Caption.propTypes = {
    post: PropTypes.object.isRequired,
}