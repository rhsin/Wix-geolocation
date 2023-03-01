import wixData from 'wix-data';
import { getSecret } from 'wix-secrets-backend';

export async function fetchApiUrl () {
	const apiKeyIPG =  await getSecret('apiKeyIPG');
	return `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeyIPG}&include=security`;
}

// This needs to match the name of the collection in Wix Database.
const collectionName = 'Visitors';

export async function saveVisitorData(json) {
	const results = await wixData.insert(collectionName, json)
	console.log(`Added item: ${JSON.stringify(results)}`);			
}