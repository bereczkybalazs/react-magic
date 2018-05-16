/**
*
* Article
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Style = styled.div`
  background: white;
  padding: 1rem;
`;

function Article(props) {
  return (
    <Style>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </Style>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
