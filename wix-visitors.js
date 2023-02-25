import { fetch } from 'wix-fetch';
import wixData from 'wix-data';

const apiKeyIPG = 'f765d915284e4dff87928acc36c4b153';

const url_IPG = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeyIPG}`;

const collectionName = 'Visitors';

$w.onReady(function () {
	fetch(url_IPG, {
			method: 'get'
		})
		.then((httpResponse) => {
			if (httpResponse.ok) {
				return httpResponse.json();
			}
		})
		.then((json) => {
			const visitorData = json;
			console.log(visitorData);

			wixData.insert(collectionName, visitorData)
				.then((results) => {
					console.log(`Added item: ${JSON.stringify(results)}`);
				})
				.catch((err) => {
					console.log(err);
				});
				
			return visitorData;
		});
});