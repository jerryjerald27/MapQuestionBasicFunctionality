import React from 'react';
import styled from 'styled-components';

function DisplayTags(props) {
    return (
        <div style={{ textAlign: "left" }}>
            {props.tags.map(tag => {
                return <TagPill style={{ backgroundColor: tag.color }}>{tag.name}</TagPill>
            })}
        </div>
    );
}

export default DisplayTags;

const TagPill = styled.button`
border-radius: 15px;
padding: 5px 15px;
border: 0px;
margin: 1px 1px;
color: white;


font-size:9px
`