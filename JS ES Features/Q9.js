"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];

rawData.forEach((item, index) => {
    try {
        const parsed = JSON.parse(item);
        if (!parsed.user || !parsed.age) throw "Missing key";
        parsed.age = Number(parsed.age);
        if (parsed.age >= 18) clean.push(parsed);
    } catch (e) {
        console.log(`Line ${index} → Error: ${e}`);
    }
});

console.log("Valid:", clean);
