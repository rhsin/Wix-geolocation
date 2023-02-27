import { getSecret } from 'wix-secrets-backend';

export function fetchApiKey () {
	return getSecret('apiKeyIPG');
}