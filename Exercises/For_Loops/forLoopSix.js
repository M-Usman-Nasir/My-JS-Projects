// For Loop Exercise: 6
// Print all even numbers from 2 to 40 but not the number who are divisible by 5 using a for loop.

// Solution Code:
for (let i = 2; i <= 40; i += 2) {
        if (i % 5 !== 0) {
          console.log(i);
        }
      }