// Conditions Exercise No.: 1

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