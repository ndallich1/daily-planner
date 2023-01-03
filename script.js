/*  Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html. */

// Defined variable for the save buttons
let saveButtonEl = $('.saveBtn');
// Defined variable for text inputs into the text areas for each hour by referencing the description class in the index.html
let scheduleEl = $('input[name="description"]');
console.log(saveButtonEl);
console.log(scheduleEl);

// Get items by the id of hour-#, then find the children with class of .description, then store the values that were input in the text areas in the browser into local storage, then display the stored values on the page
$("#hour-8 .description").val(localStorage.getItem("hour-8"))
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))


$(function () {
  // Listens for click event on the save button (this)
  saveButtonEl.each(function(event) {
    $(this).on('click', handleFormSubmit);
  })

  // This function applies the past, present, or future classes to each div by comparing it to the current hour 
  function displayColor() {
    // Defined variable for now which equals the current time in hours (in military time by using HH)
    let now = dayjs().format('HH');
    // Defined variable with an array of numbers that correlate to the time-block hours in military time
    let timeBlocks = [8, 9, 10, 11, 12, 13, 14, 15, 16];
    // run a loop through each number in the array and add one of the three classes depending on how the time in the time block compares to the current hour 
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

  // function that handles the form submission by retrieving user input that was saved in local storage and setting the values of the corresponding textarea elements. 
  function handleFormSubmit(event) {
    event.preventDefault();
    // Console logs the save button 
    console.log($(this));
    // Defined variable to get the sibling of the save button which is the textarea 
    let scheduleItem = $(this).siblings('.description');
    console.log(scheduleItem);
    // Defined variable to get the value of every matched element in the scheduleItem
    let scheduleText = scheduleItem.val();
    console.log(scheduleText);
    // Defined variable to get the parent of the save button, then add a new attribute of id 
    let timeBlockId = $(this).parent().attr("id");
    // The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists 
    localStorage.setItem(timeBlockId, scheduleText);
  }
  
  // Displays current date in the header 
  let today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));  
});

