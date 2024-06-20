// Conditions Exercise No.: 1
// Create a code snippet to check user status

// Solution code:
const isUserLoggedIn = true;
const isProSubscriber = true;
if (!isUserLoggedIn) {
    console.log("Please login first");
}
else if (isUserLoggedIn && !isProSubscriber) {
    console.log("consider subscribe Please");
}
else {
    console.log("Welcome Sir, Thanks for LoggedIn & subscribed");
}