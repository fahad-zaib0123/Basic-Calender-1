const month =document.getElementById("month-name");
const day =document.getElementById("day-name");
const dayc =document.getElementById("day-number");
const year =document.getElementById("year");
const date = new Date();
// const month = date.getMonth();
month.innerText= date.toLocaleString("en",{
    month:"long"
})
day.innerText= date.toLocaleString("en",{
    weekday:"long"
})
dayc.innerText=date.getDate();
year.innerText=date.getFullYear()
// console.log(month);