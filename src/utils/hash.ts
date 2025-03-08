// Hash function from MDN. To be used to hash emails so they're not stored in the DB.
async function hashText(message: string) {
	const encoder = new TextEncoder();
	const data = encoder.encode(message);
	const hash = await crypto.subtle.digest("SHA-256", data);
	return hash;
}
