import { fetch } from 'wix-fetch';
import wixData from 'wix-data';
import wixWindow from 'wix-window';

// API key goes here
const apiKeyIPG = 'f765d915284e4dff87928acc36c4b153';

const url_IPG = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeyIPG}`;

// The collection's permissions settings must be set as -> Can add content: Anyone.
// Copy and paste this whole code snippet into the page you want tracked, with Dev Mode enabled.

// This needs to match the name of the collection in Wix Database.
const collectionName = 'Visitors';

$w.onReady(function () {
	fetch(url_IPG, { method: 'get' })
		.then((httpResponse) => {
			if (httpResponse.ok) {
				return httpResponse.json();
			}
		})
		.then((json) => {
			const visitorData = json;
			console.log(visitorData);
			
			if (wixWindow.rendering.env === "browser") {
				wixData.insert(collectionName, visitorData)
					.then((results) => {
						console.log(`Added item: ${JSON.stringify(results)}`);
					})
					.catch((err) => {
						console.log(err);
					});
			}

			return visitorData;
		});
});