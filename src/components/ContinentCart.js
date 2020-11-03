import React from 'react'

function ContinentCart({name}) {
    const style = `continentCart continentCart__${name}`;
    console.log(style);
    return (
        <div className={style}>
            <div className="continentCart__text">{name}</div>
        </div>
    )
}

export default ContinentCart
