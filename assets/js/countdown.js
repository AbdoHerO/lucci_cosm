// Get the current date and time
var now = new Date().getTime();

// Calculate the end time as current time + 1 day and 1 hour
var endTime =
  now + 1 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000 + 25 * 60 * 1000;

// Retrieve the saved end time from localStorage
var savedEndTime = localStorage.getItem("countdownEndTime");

// If a saved end time exists, use it
if (savedEndTime) {
  endTime = parseInt(savedEndTime, 10);
} else {
  // Save the end time to localStorage if it doesn't exist
  localStorage.setItem("countdownEndTime", endTime);
}

// Update the countdown every 1 second
var countdownTimer = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = endTime - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Format the values with leading zeros
  days = formatNumber(days);
  hours = formatNumber(hours);
  minutes = formatNumber(minutes);
  seconds = formatNumber(seconds);

  // Display the countdown values
  document.getElementById("days-value").innerHTML = days;
  document.getElementById("hours-value").innerHTML = hours;
  document.getElementById("minutes-value").innerHTML = minutes;
  document.getElementById("seconds-value").innerHTML = seconds;

  // If the countdown is finished, reset the end time and save it to localStorage
  if (distance < 0) {
    endTime =
      now + 1 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000 + 25 * 60 * 1000;
    localStorage.setItem("countdownEndTime", endTime);
  }
}, 1000);

// Helper function to format a number with leading zeros
function formatNumber(number) {
  return number.toString().padStart(2, "0");
}
