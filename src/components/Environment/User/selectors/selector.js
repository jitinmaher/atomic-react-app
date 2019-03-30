import { createSelector } from 'reselect';

const getData = ( state ) => state.sampleReducer.toJS();
// reselect function
export const makeSelectAuthor = createSelector(
  [ getData ],
  ({ data }) => data.author
);