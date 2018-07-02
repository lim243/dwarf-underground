import React from 'react'

const Link = (props) => {
    return (
            <div className="small-6 medium-3 columns other-article">
            <a href={props.link.href}>
                <img src={props.link.src} 
                alt={props.link.alt} />
                <p>{props.link.title}</p>
            </a>  
            </div>
    )
}

export default Link