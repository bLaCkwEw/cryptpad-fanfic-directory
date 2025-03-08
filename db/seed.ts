import { db, Users, Fanfics } from 'astro:db';



// https://astro.build/db/seed
export default async function() {
	await db.insert(Users).values([
		{ id: 1, email_hash: "aaaaaaaaaaaaaaaaa" },
		{ id: 2, email_hash: "bbbbbbbbbbbbbbbbb" },
	]);

	await db.insert(Fanfics).values([
		{ id: 1, user_id: 2, url: "https://cocotier.ro", timestamp: new Date("2020-01-01"), likes: 10 },
	]);

}
