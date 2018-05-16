/**
 *
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Article from 'components/Article';
import { makeSelectPosts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getPosts } from './actions';


const Style = styled.div`
  padding: 1rem;
  background: lightgray;
  min-height: 50vh;
`;

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <Style>
        <Helmet>
          <title>HomePage kek</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        { this.props.posts.map((post) => <Article key={post.id} title={post.title} content={post.body} />)}
      </Style>
    );
  }
}

HomePage.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homepage', reducer });
const withSaga = injectSaga({ key: 'homepage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
