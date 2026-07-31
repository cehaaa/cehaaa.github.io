const NAMES = ["wanderer", "traveler", "dreamer", "stargazer", "explorer"];
const GREETINGS = {
  morning: ["good morning 🌥️", "morning! 🌥️"],
  afternoon: ["good afternoon ☀️", "afternoon! ☀️"],
  evening: ["good evening 🌙", "evening! 🌙"],
};

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getGreeting() {
  const hour = new Date().getHours();
  const template = `hello ${random(NAMES)},`;
  let greeting = "";

  if (hour < 12) greeting = random(GREETINGS.morning);
  else if (hour < 18) greeting = random(GREETINGS.afternoon);
  else greeting = random(GREETINGS.evening);

  return `${template} ${greeting}`;
}

document.getElementById("greeting").textContent = getGreeting();
