// Conditions Exercise No.: 2
// Create a marksheet and assign a user grade based on his percentage

// Solution Code:
let english = 85;
let urdu = 80;
let mathematics = 90;
let totalMarks = 300;
let obtainedMarks = english + urdu + mathematics;
let obtainedPercentage = (obtainedMarks * 100) / totalMarks;
if (obtainedPercentage >= 85) {
    console.log("Congratulations, you have passed with A+ grade");
}
else if (obtainedPercentage >= 80) {
    console.log("A grade");
}
else if (obtainedPercentage >= 70) {
    console.log("B grade");
}
else if (obtainedPercentage >= 60) {
    console.log("C grade");
}
else if (obtainedPercentage >= 50) {
    console.log("F grade. Sorry, you have failed");
}