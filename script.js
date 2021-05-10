let currentDayEl = document.querySelector("#currentDay");

// get current date and time from luxon 
let DateTime = luxon.DateTime;
let today = DateTime.now().toLocaleString({weekday:'long', month: 'long', day: '2-digit'});
let time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);

// display current day and date.  Pull events from local storage.  Color code the timeblock.
function init(){
currentDayEl.textContent=today;
}

// .container is were the timeblock will go

// When we hit save there is no refresh event is saved to local storage. 

// on page load events are pulled from local storage.
init();

