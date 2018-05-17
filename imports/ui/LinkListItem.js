import React from 'react';

const LinkListItem = (props) => {
    return (
        <div>
            <h2>{props.url}</h2>
            <p>{props.shotrtUrl}</p>
        </div>
    );
};

export default LinkListItem;