// CURRENT DATE GENERATION
const today = new Date();
// -----------------------------------------
function updateCalender() {
  // ELEMENT SELECTION
  const month = document.querySelector(".data h1");
  const dateData = document.querySelector(".data p");
  const monthDays = document.querySelector(".days");
  // -----------------------------------------------------------
  // PROGRAM FOR TOP MOST RED SECTION
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  month.textContent = monthArray[today.getMonth()];
  dateData.textContent = today.toDateString();
  // -----------------------------------------------------------
  // PROGRAM FOR DYNAMIC DATES IN CALENDER
  today.setDate(1);
  const previousDays = today.getDay();
  // --------------------------------------------------------------------
  //   PROGRAM FOR PREVIOUS,CURRENT AND NEXT MONTHS
  const lastDate = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const previousLastDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    0
  ).getDate();

  const lastDateIndex = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDay();
  const nextDate = 7 - lastDateIndex - 1;

  let days = "";
  // loop to print previous months date
  for (let x = previousDays; x > 0; x--) {
    days += `<div class="empty">${previousLastDate - x + 1}</div>`;
  }

  // loop to print current month date
  for (let i = 1; i <= lastDate; i++) {
    if (
      i == new Date().getDate() &&
      today.getMonth() == new Date().getMonth() &&
      today.getFullYear() == new Date().getFullYear()
    ) {
      days += `<div class="active">${i}</div>`;
      monthDays.innerHTML = days;
    } else {
      days += `<div>${i}</div>`;
      monthDays.innerHTML = days;
    }
  }
  // loop to print next month dates
  for (let y = 1; y <= nextDate; y++) {
    days += `<div class="empty">${y}</div>`;
    monthDays.innerHTML = days;
  }
}

// BUTTON ELEMENTS SELECTION
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
// --------------------------------------------------------

// EVENTS TO BUTTONS
prevButton.addEventListener("click", () => {
  today.setMonth(today.getMonth() - 1);
  updateCalender();
});

nextButton.addEventListener("click", () => {
  today.setMonth(today.getMonth() + 1);
  updateCalender();
});
// --------------------------------------------------------------

updateCalender();
