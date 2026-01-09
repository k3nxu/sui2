export function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = currentDate.toLocaleDateString("en-GB", dateOptions);
  const time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  document.getElementById("header_date").innerHTML = `<span class="date">${date}</span><span class="time">${time}</span>`;
}

export function greet() {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let greet;

  if (hour >= 0 && hour < 6) {
    greet = "Good night :)";
  } else if (hour >= 6 && hour < 12) {
    greet = "Good morning :)";
  } else if (hour >= 12 && hour < 18) {
    greet = "Good afternoon :)";
  } else {
    greet = "Good evening :)";
  }

  document.getElementById("header_greet").innerHTML = greet;
}
