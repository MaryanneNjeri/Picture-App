import { database } from '../../../../firebase/config';

export default async function getEvents() {
  const intialQuery = await database.collection('events')
    .where('id', '<=', 20)
    .orderBy('id')
    .limit(9);
  const documentSnapshots = await intialQuery.get();
  const documentData = documentSnapshots.docs.map(document => document.data());
  return documentData;
}
