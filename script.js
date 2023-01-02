/*  Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html. */

let saveButtonEl = $('.saveBtn');
let scheduleEl = $('input[name="description"]');
console.log(saveButtonEl);
console.log(scheduleEl);

$(function () {
  /* TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be
  useful when saving the description in local storage? */
  // in progress
  saveButtonEl.each(function(event) {
    $(this).on('click', handleFormSubmit);
  })

// This function applies the past, present, or future classes to each div by comparing it to the current hour 
function displayColor() {
  let now = dayjs().format('HH');
  let timeBlocks = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  // this needs to run in a loop
  for (let i = 0; i < timeBlocks.length; i++) {
    if (timeBlocks[i] > now) {
    $(`#hour-${timeBlocks[i]}`).addClass('future'); 
    }
     
    if (timeBlocks[i] == now) {
    $(`#hour-${timeBlocks[i]}`).addClass('present'); 
    }
   
    if (timeBlocks[i] < now) {
    $(`#hour-${timeBlocks[i]}`).addClass('past'); 
    }
    console.log($(`hour-${i}`));
  }
 } 
// Calls the function 
displayColor();
   
  /* TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id
  attribute of each time-block be used to do this? */
  // in progress
  // use Dom traversal to select sibling of text area 
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log($(this));
    let scheduleItem = $(this).siblings('.description');
    console.log(scheduleItem);
    let scheduleText = scheduleItem.val();
    console.log(scheduleText);
    let timeBlockId = $(this).parent().attr("id");
    localStorage.setItem(timeBlockId, scheduleText);
  }
  // Hint: difficult part = save under a keyname that will be recognized. Retrieve from local storage and write to a string.  

  
  /* TODO: Add code to display the current date in the header of the page. */
  // Complete
  let today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));  
});

