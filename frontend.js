import wixWindow from 'wix-window';
import { fetch } from 'wix-fetch';
import { fetchApiKey, saveVisitorData } from 'backend/VisitorData';

const url_IPG = `https://api.ipgeolocation.io/ipgeo?apiKey=`;

$w.onReady(function () {
	fetchApiKey()
		.then((apiKeyIPG) => 
			fetch(`${url_IPG}${apiKeyIPG}`, { method: 'get' }))
				.then((httpResponse) => {
					if (httpResponse.ok) {
						return httpResponse.json();
					}
				})
				.then((json) => {
					if (wixWindow.rendering.env === "browser") {
						saveVisitorData(json);
					}
				})
				.catch((err) =>  console.log(err))
});