

/*fetch("../json/data.json")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error));*/
  
fetch("../json/data.json")
  .then(response => response.json())
  .then(data => {
    const tittleTracking = document.querySelectorAll(".cell-theme__text");
    const timeTracking = document.querySelectorAll(".time-tracking__time");
    const trackingSummary = document.querySelectorAll(".time-tracking__text");

    for(a = 0; a < tittleTracking.length; a++){
        tittleTracking[a].textContent = data[a].title;
        timeTracking[a].textContent = data[a].timeframes.weekly.current + "hrs";
        trackingSummary[a].textContent = "Last Week - " + data[a].timeframes.weekly.previous + "hrs";
    }

    console.log(data);
    console.log(data[0]);
    console.log(data[0].timeframes.weekly);
  })
  .catch(error => console.log(error));


  sendForm.addEventListener('click', function (event) {
});