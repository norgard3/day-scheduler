let currentDayEl = document.querySelector("#currentDay");
let containerEl=document.querySelector(".container");
let contentEl=document.querySelectorAll(".content");
let nineEl=document.querySelector("#nine");
let tenEl=document.querySelector("#ten");
let elevenEl=document.querySelector("#eleven");
let timeBlock=[nineEl,tenEl,elevenEl];
let allEvents=["","","","","","","","",""];

// get current date and time from luxon 
let DateTime = luxon.DateTime;
let today = DateTime.now().toLocaleString({weekday:'long', month: 'long', day: '2-digit'});
// time will capture the current time when user logs on.
let time = DateTime.now().hour;

function loop(){
    $('table > tbody  > tr').each(function(index, tr) { 
        if(time>index+9){
            contentEl[index].classList.add("past")
        }
        else if (time===index+9){
            contentEl[index].classList.add("present")
            }
        else{
            contentEl[index].classList.add("future")
     }
    })
}

// display current day and date.  Pull events from local storage.  Color code the timeblock.
function init(){
currentDayEl.textContent=today;
loop();
renderEvents();
}

// store all events to local storage
function storeEvents(){
    localStorage.setItem("allEvents", JSON.stringify(allEvents));
    localStorage.setItem("today", JSON.stringify(today));
}

// pull all events from local storage and display them
function renderEvents(){  
    let showAllEvents = JSON.parse(localStorage.getItem("allEvents"));
    let storedDay = JSON.parse(localStorage.getItem("today"));
    // check to see if the day changed.  If it did clear all events from local storage.
    if (storedDay !== today){
       storeEvents() 
    }

    // If there are things in local storage display them on the timeblock.
    else if (showAllEvents !== null){
        allEvents = showAllEvents;
        for(i=0; i<contentEl.length; i++){
            contentEl[i].textContent=showAllEvents[i];
        }
    }
}

// When we hit event is saved to local storage.
$("button").click(function(){
        let reminder = $(this).attr("data-index");
        let event = contentEl[reminder].textContent;
        allEvents.splice(reminder, 1, event);  
        storeEvents();
})

// on page load events are pulled from local storage.
init();