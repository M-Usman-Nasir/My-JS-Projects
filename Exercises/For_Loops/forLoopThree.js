// For Loop Exercise: 3
// Track the loop progress

// Solution Code:
for (let i = 1; i <= 90; i++) {
    if (i === 50) {
        console.log ("half way there!");
        continue;
    }
    if (i % 10 === 0) {
      console.log("checkpoint " + i);
    }
}
console.log("You made it!");
console.log("All done!");
