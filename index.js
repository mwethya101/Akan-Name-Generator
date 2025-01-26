document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    {
      event.preventDefault();
    }

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    // Validate day and month
    if (day <= 0 || day > 31 || month <= 0 || month > 12) {
      alert("Please enter a valid day (1-31) and month (1-12).");
      return;
    }

    // Calculate the Akan name
    const akanName = getAkanName(day, month, year, gender);
    document.getElementById(
      "result"
    ).innerText = `Your Akan name is ${akanName}`;
  });
console.log("Akan Names");

function getAkanName(day, month, year, gender) {
  const CC = Math.floor(year / 100);
  const YY = year % 100;

  // Zeller's Congruence formula
  const dayOfWeek = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) % 7
  );

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afia",
    "Ama",
  ];

  return gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
}
