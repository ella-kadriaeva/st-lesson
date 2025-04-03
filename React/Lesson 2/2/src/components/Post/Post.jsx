import React from 'react'

const Post = ({title, desc}) => {
    // let {title, desc} = props;

    return (
        <div className="item">
            <h2 className="item-title">{title}</h2>
            <p className="item-desc">{desc}</p>
        </div>
    )
}

export default Post