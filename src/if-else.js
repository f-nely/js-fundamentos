let hour = 18,
  message = "";

if (hour < 12) {
  message = "Good Morning!";
} else if (hour >= 12 && hour < 18) {
  message = "Good Afternoon!";
} else {
  message = "Good Night";
}

console.log(message);
