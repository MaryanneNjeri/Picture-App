import app from '../../firebase/config';

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
    const eventsRef = app.ref('/popularEvents');
    if (eventsRef !== null) {
      eventsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const items = Object.values(data);
        dispatch(eventsSuccess(items));
      });
    } else {
      dispatch(eventsFailure('An Error Occurred'));
    }
  };
}
