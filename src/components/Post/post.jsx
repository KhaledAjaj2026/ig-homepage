import './post.scss';
import Account from '../Account/account';
import Caption from '../Caption/caption';
import Interactions from '../Interactions/interactions';
import ImagePost from '../Image/image-post';

export default function Post() {
    return (
        <>
            <div id="post-component">
                <Account />
                <ImagePost />
                <Caption />
                <Interactions />
            </div>
        </>
    )
}