import { defineDb, defineTable, column } from 'astro:db';


const Users = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		email_hash: column.text(),
	}
})

const Fanfics = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		user_id: column.number({ references: () => Users.columns.id }),
		url: column.text(),
		timestamp: column.date(),
		likes: column.number(),
	}
})


export default defineDb({
	tables: { Users, Fanfics }
});
