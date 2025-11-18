"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let t of transactions) {
    try {
        if (t === null) throw "Null transaction";
        if (!("id" in t)) throw "Missing ID";
        if (!("amount" in t)) throw "Missing amount";
        if (t.amount < 0) throw "Negative amount";

        valid.push(t);
    } catch (e) {
        invalid.push({ transaction: t, error: e });
    }
}

console.log("Valid:", valid);
console.log("Invalid:", invalid);
console.log(`Success: ${valid.length}, Failed: ${invalid.length}`);
