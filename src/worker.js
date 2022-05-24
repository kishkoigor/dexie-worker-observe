import {db} from "./db";

setInterval(async () => {
	const client = await db.bank.get({ name: 'Igor' });
	db.bank.put({ name: 'Igor', balance: client.balance + 50 })
}, 1500)
