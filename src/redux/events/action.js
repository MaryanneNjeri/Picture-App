import getEvents from '../../components/lib/functions/app/getEvents';

export const EVENTS_BEGIN = 'EVENTS_BEGIN';
export const EVENTS_SUCCESS = 'EVENTS_SUCCESS';
export const EVENTS_FAILURE = 'EVENTS_FAILURE';

export const eventsBegin = () => ({
  type: EVENTS_BEGIN,
});

export const eventsSuccess = events => ({
  type: EVENTS_SUCCESS,
  payload: { events },
});


export const eventsFailure = error => ({
  type: EVENTS_FAILURE,
  payload: { error },
});


export function fetchEvents() {
  return (dispatch) => {
    dispatch(eventsBegin());
    getEvents().then((documentData) => {
      dispatch(eventsSuccess(documentData));
    })
      .catch((error) => {
        dispatch(eventsFailure(error));
      });
  };
}
