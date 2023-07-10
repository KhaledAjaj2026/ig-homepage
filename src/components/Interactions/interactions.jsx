import { useState } from 'react';
import './interactions.scss';

export default function Interactions() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                this is an Interactions component.
            </div>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    )
}