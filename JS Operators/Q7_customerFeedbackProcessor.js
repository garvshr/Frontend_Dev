let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
let includesBad = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
if (!includesBad) console.log("Positive Feedback");
else console.log("Needs Improvement");
console.log(`Word Count: ${words}`);
