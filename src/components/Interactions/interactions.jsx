import { useState } from 'react';
import './interactions.scss';

export default function Interactions() {
    const [likes, setLikes] = useState(0);
    const [shares, setShares] = useState(0);
    const [save, setSave] = useState(false);

    function savedPost() {
        if (save === false) {
            return "Unsaved";
        } else {
            return "Saved";
        }
    }

    return (
        <>
            <div id='interactions-component'>
                <button className='like-button' onClick={() => setLikes((likes) => likes + 1)}>❤️</button>
                <button className='share-button' onClick={() => setShares((shares) => shares + 1)}>❤️</button>
                <button className='save-button' onClick={() => setSave((save) => save = !save)}>❤️</button>
                <p className="likes-count">{likes} Likes</p>
                <p className="share-count">{shares} Shares</p>
                <p className="save-count">{savedPost()}</p>
            </div>
        </>
    )
}