import wixWindow from 'wix-window';
import { fetch } from 'wix-fetch';
import { fetchApiUrl, saveVisitorData } from 'backend/VisitorData';

$w.onReady(async function () {
	try {
		const api_url = await fetchApiUrl();
		const httpResponse = await fetch(api_url, { method: 'get' });
		const json = await httpResponse.json();
		if (wixWindow.rendering.env === "browser") {
			saveVisitorData(json);
			console.log(json);
		}
	} 
	catch(err)  {
		console.log(err);
	}
});