import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function NewsBox(props) {
    if (props.isLoading) {
        return (
            <div>
            </div>
        )
    }
    return (
        <BoxWrapper>
            <div>
                <a href={props.newsItem.link} target="_blank" rel="noopener noreferrer">
                    <NewsTitle>{props.newsItem.title}</NewsTitle>
                    {props.newsItem.description}
                <hr />
                </a>
            </div>
            
        </BoxWrapper>
    )
}

const BoxWrapper = styled.section`
  cursor: pointer;
  padding: 10px 0 0 0;
  &:hover {
    background-color: #f2f2f2;
  }
  a {
    color: black;
    text-decoration: none; /* no underline */
  }
`;

const NewsTitle = styled.section`
  font-weight: bold;
`;

NewsBox.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    newsItem: PropTypes.object
}