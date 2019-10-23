$(document).ready(function() {
  /*Tutor instructed me to add "number" to front of variable as I was having the 9 am time slot always appear in green*/
  var currentHour = Number(moment().format("HH"));
  var currentDate = Number(moment().format("YYYY-MM-DD HH-mm-ss"));

  console.log(currentDate);

  var dailyTasks = JSON.parse(localStorage.getItem("myDay")) || {};

  var timeSlots = $(".timeSlot");
  console.log(timeSlots.length);
  for (i = 0; i < timeSlots.length; i++) {
    var slotHour = Number(timeSlots[i].getAttribute("data-hour"));

    if (slotHour < currentHour) {
      timeSlots[i].style.backgroundColor = "grey";

      timeSlots[i]
        .getElementsByTagName("textarea")[0]
        /*buttons in past hour are supposed to be disabled but I'm not able to get this work*/
        .setAttribute("disabled", true);
      timeSlots[i]
        .getElementsByTagName("textarea")[0]
        .setAttribute("disabled", true);
    } else if (slotHour == currentHour) {
      timeSlots[i].style.backgroundColor = "red";
    } else {
      timeSlots[i].style.backgroundColor = "green";
    }
  }

  $(".js-save").on("click", function() {
    /* get the key and the value */
    var key = $(this).data("key");
    var value = $(`#${key}`).val();

    // save it local storage
    dailyTasks[key] = value;
    console.log(dailyTasks);
    localStorage.setItem("myDay", JSON.stringify(dailyTasks));
  });

  
  /* pull from local storage */
  $("#hour-9").val(dailyTasks["hour-9"]);
  $("#hour-10").val(dailyTasks["hour-10"]);
  $("#hour-11").val(dailyTasks["hour-11"]);
  $("#hour-12").val(dailyTasks["hour-12"]);
  $("#hour-13").val(dailyTasks["hour-13"]);
  $("#hour-14").val(dailyTasks["hour-14"]);
  $("#hour-15").val(dailyTasks["hour-15"]);
  $("#hour-16").val(dailyTasks["hour-16"]);
  $("#hour-17").val(dailyTasks["hour-17"]);
});
