const dayElement = document.querySelector(".days");
const hourElement = document.querySelector(".hours");
const minuteElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer")
// converting seconds,minutes,hours,days
const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;
1
const timerFunction = () => {

//generating current date in mm/dd/yyyy
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, "0"), mm = String(now.getMonth() + 1).padStart(2, "0"), yyyy = String(now.getFullYear());
    now = `${mm}/${dd}/${yyyy}`;


    //taking targer date from user
    const entereDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");

    let targetDate = `${enteredMonth}/${entereDay}/${yyyy}`;

    //checking if target date is for next year
    if (now > targetDate) {
        targetDate = `${enteredMonth}/${entereDay}/${yyyy + 1}`;
    }

    const intervalID = setInterval(() => {
        //convertingtargetDate  in miliseconds
        const timer = new Date(targetDate).getTime();
        //taking current date in miliseconds
        const today = new Date().getTime();
//finding difference
        const difference = timer - today;
//  finding left days hours minutes and seconds
        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);
// showing timer in DOM
        dayElement.innerText = leftDay;
        hourElement.innerText = leftHour;
        minuteElement.innerText = leftMinute;
        secondElement.innerText = leftSecond;
//stop set interval after reaching the target date
        if (difference < 0) {
            counterTimer.style.display = "none";
            heading.innerText = "Time's up";
            clearInterval(intervalID);
        }

    }, 0);
};

timerFunction();