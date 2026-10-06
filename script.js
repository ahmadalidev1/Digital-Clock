alert("This is Digital Clock")

const heading = document.querySelector("h1");
const heading2 = document.querySelector("h2")

setInterval(() => {
   const t = new Date()

   let hour = t.getHours();
   let min = t.getMinutes();
   let sec = t.getSeconds();

    
 let time2 = "AM"

 if (hour >= 12) {
    time2= "PM"
 }

 let amPm = "";

 if (hour >= 12){
    amPm -= 12
 }else if (hour === 0){
    amPm = 12;
 }

 const d = new Date();

 let date = d.getDate()
 let month = d.getMonth()
 let year = d.getFullYear()


 if(sec < 10) {
    sec = "0" + sec
 }

  if(min < 10){
    min = "" + sec
 }

 if(hour < 10){
    hour = "0" + hour
 }

 if(date < 10){
    date = "0" + date
 }

 if(month < 10){
    month = "" + month
 }

 if(hour > 12) {
   hour = hour % 12
   hour = "0" + hour
 }

    heading.innerHTML = `${hour} : ${min} : ${sec} <span style="font-size:15px">${time2}</span>`
    heading2.innerHTML = `${date} : ${month+1} : ${year}`
}, 1000);
