import Fire, { database } from '../../../../firebase/config';

export default async function getEvents() {
  const user = Fire.auth().currentUser;
  const intialQuery = await database.collection('stories').where('uid', '==', user.uid);

  const documentSnapshots = await intialQuery.get();
  const documentData = documentSnapshots.docs.map(document => document.data());
  return documentData;
}
