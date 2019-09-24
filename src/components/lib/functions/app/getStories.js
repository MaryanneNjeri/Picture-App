import { database } from '../../../../firebase/config';

export default async function getEvents() {
  const intialQuery = await database.collection('stories')
      .orderBy('timestamp', 'desc')
    .limit(9);
  const documentSnapshots = await intialQuery.get();
  const documentData = documentSnapshots.docs.map(document => document.data());
  return documentData;
}
