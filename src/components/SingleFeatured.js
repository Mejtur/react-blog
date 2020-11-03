import React from 'react'

function SingleFeatured({image,title,tags,description}) {
    return (
        <div className="singleFeatured">
            <img src={image.file.url} className="singleFeatured__image" alt="singleFeatured"/>
            <h1 className="singleFeatured__title">{title}</h1>
            <div className="singleFeatured__tagContainer">
                <p>Tags: </p>
                {tags.map((tag,index)=>(
                    <p key={index}>{tag}</p>
                ))}
            </div>
                <p className="singleFeatured__description">{description}</p>
                <hr/>
        </div>
    )
}

export default SingleFeatured
