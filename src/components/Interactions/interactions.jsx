import { useState } from 'react';
import './interactions.scss';

export default function Interactions() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div id='interactions-component'>
                <button className='like-button' onClick={() => setCount((count) => count + 1)}>❤️</button>
                <p className="likes-count">{count} Likes</p>
            </div>
        </>
    )
}