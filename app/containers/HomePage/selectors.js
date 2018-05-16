import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = (state) => state.get('homepage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate
);

const makeSelectPosts = () => createSelector(
  selectHomePageDomain,
  (homepage) => homepage.get('posts'),
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectPosts,
};
