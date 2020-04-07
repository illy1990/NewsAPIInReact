import React from 'react';

const newsItem = (props) => {
    return (
        <figure>
            <img className="imgNews" src={props.urlToImage} alt="" />
            <figcaption>
                <h3><b>Title: </b> {props.title}</h3>
                <h3><b>Description: </b> {props.description}</h3>
                <h3><b>Author: </b> {props.author}</h3>
                <h4><b>Published at: </b> {props.publishedAt}</h4>
                <a href={props.url}>visit the source</a>
            </figcaption>
        </figure>
    )
}

export default newsItem;