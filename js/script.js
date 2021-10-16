fetch("./public/data.json",{
        headers : { 
        'ContentS-Type': 'application/json',
        'Accept': 'application/json'
        }
  })
  .then(response => response.json())
  .then(data => {
    const tittleTracking = document.querySelectorAll(".cell-theme__text");
    const timeTracking = document.querySelectorAll(".time-tracking__count-time");
    const trackingSummary = document.querySelectorAll(".time-tracking__text-count");

    for(a = 0; a < tittleTracking.length; a++){
        tittleTracking[a].textContent = data[a].title;
        timeTracking[a].textContent = data[a].timeframes.weekly.current;
        trackingSummary[a].textContent = data[a].timeframes.weekly.previous;
    }
  })
  .catch(error => console.log(error));

  const changeTimeList = document.querySelectorAll(".time-change__change-time");
  var optionActive = 1;

  function animationChangeDashboard(){
    let textHidden = document.querySelectorAll(".time-tracking__time");

    for(d = 0; d < textHidden.length; d++){
        textHidden[d].classList.toggle("time-tracking__time--animation");
    }
  }

  function changeDataDashboard(changeOption){
    fetch("./public/data.json",{
        headers : { 
        'ContentS-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const timeTracking = document.querySelectorAll(".time-tracking__count-time");
        const trackingSummary = document.querySelectorAll(".time-tracking__text-count");

        for(c = 0; c < timeTracking.length; c++){
            if(changeOption == 0){
                timeTracking[c].textContent = data[c].timeframes.daily.current;
                trackingSummary[c].textContent = data[c].timeframes.daily.previous;
            }
            else if(changeOption == 1){
                timeTracking[c].textContent = data[c].timeframes.weekly.current;
                trackingSummary[c].textContent = data[c].timeframes.weekly.previous;
            }
            else{
                timeTracking[c].textContent = data[c].timeframes.monthly.current;
                trackingSummary[c].textContent = data[c].timeframes.monthly.previous;
            }
        }
    })
    .catch(error => console.log(error));
  }

  function activeOptionTime(index){
    changeTimeList[index].addEventListener('click', function (event) {

        if(optionActive != index){
            animationChangeDashboard();

            changeDataDashboard(index);

            const optionTimeList = document.querySelectorAll(".time-change__option");
            optionTimeList[optionActive].style.color = "hsl(236, 100%, 87%)";
            optionTimeList[index].style.color = "#ffffff";
            aria-live
    
            optionActive = index;

            
            setTimeout(animationChangeDashboard, 1000);
        }
    });
  }

  for(b = 0; b < changeTimeList.length; b++){
    activeOptionTime(b);
  }