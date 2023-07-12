import './post.scss';
import Account from '../Account/account';
import Caption from '../Caption/caption';
import Interactions from '../Interactions/interactions';
import ImagePost from '../Image/image-post';
import PropTypes from 'prop-types';

export default function Post({ post }) {
    return (
        <>
            <div id="post-component">
                <Account post={post} />
                <ImagePost post={post} />
                <Interactions post={post} />
                <Caption post={post} />
            </div>
        </>
    )
}

Post.propTypes = {
    post: PropTypes.node.isRequired,
}