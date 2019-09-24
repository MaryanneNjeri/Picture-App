import * as firebase from 'firebase';

function uploadPhoto(uri, uploadUri) {
  return new Promise(async (res, rej) => {
    const response = await fetch(uri).catch((error) => {
      console.log('the error', error);
    });
    const blob = await response.blob();
    const ref = firebase.storage().ref(uploadUri);
    const unsubscribe = ref.put(blob).on('state_changed', (state) => {},
      (err) => {
        unsubscribe();
        rej(err);
      },
      async () => {
        unsubscribe();
        const url = await ref.getDownloadURL();
        res(url);
      });
  });
}

export default uploadPhoto;
