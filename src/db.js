import Dexie from "dexie";

export const db = new Dexie('lorem-ipsum-dolor');

db.version(1).stores({
	bank: 'name, age'
})

db.bank.put({ name: 'Igor', balance: 400 });
