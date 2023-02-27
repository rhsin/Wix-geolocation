import wixData from 'wix-data';
import { getSecret } from 'wix-secrets-backend';

// This needs to match the name of the collection in Wix Database.
const collectionName = 'Visitors';

export function saveVisitorData(json) {
	const visitorData = json;
	wixData.insert(collectionName, visitorData)
		.then((results) => {
			console.log(`Added item: ${JSON.stringify(results)}`);
		})
		.catch((err) => {
			console.log(err);
		});

	return visitorData;				
}

export function fetchApiKey () {
	return getSecret('apiKeyIPG');
}