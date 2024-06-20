// Switch Statements Exercise No.: 1
// Set An Alarm for different days of the week.

// Solution Code:
const dayOfWeek = "Monday"
switch (dayOfWeek) {
    case "Monday":
        console.log("It's a weekday wake up at 8am");
        break;
    case "Tuesday":
    case "Wednesday":
        console.log("It's a weekday wake up at 9am");
        break;
    case "Thursday":
        console.log("It's a weekday wake up at 9:30am");
        break;
    case "Friday":
        console.log("It's a weekday wake up at 8:30am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend wake up at 10am");
        break;
        default: console.log ("not a valid day");
}