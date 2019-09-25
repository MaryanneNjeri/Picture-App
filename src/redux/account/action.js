import getStories from '../../components/lib/functions/app/getStories';

export const STORIES_BEGIN = 'STORIES_BEGIN';
export const STORIES_SUCCESS = 'STORIES_SUCCESS';
export const STORIES_FAILURE = 'STORIES_FAILURE';

export const storiesBegin = () => ({
  type: STORIES_BEGIN,
});

export const storiesSuccess = stories => ({
  type: STORIES_SUCCESS,
  payload: { stories },
});


export const storiesFailure = error => ({
  type: STORIES_FAILURE,
  payload: { error },
});


export function fetchStories() {
  return (dispatch) => {
    dispatch(storiesBegin());
    getStories().then((response) => {
      dispatch(storiesSuccess(response));
    })
      .catch((error) => {
        dispatch(storiesFailure(error));
      });
  };
}
