let level = 10;
let performanceScore = 70;
let missionsCompleted = true;

let coins = (level * 50) + (performanceScore * 10);
if (missionsCompleted) coins *= 2;

let rank = coins > 1000 ? "Elite" : "Regular";

console.log("Level: " + level);
console.log("Performance Score: " + performanceScore);
console.log("Missions Completed: " + missionsCompleted);
console.log("Coins Earned: " + coins);
console.log("Player Rank: " + rank);
