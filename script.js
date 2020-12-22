console.log("hello, if you see me, it works")

const myClockFace = 
    document.querySelector("#clock-face");
const myButton =
    document.querySelector(".btn");
const myButton2 =
    document.querySelector(".btn2");
const body =
    document.querySelector("body");

//myClockFace.innerHTML = "23:59:59 PM";
myButton.style.color = "purple";
myButton2.style.color = "purple";
body.style.backgroundColor = "#eeccd9";

const tick = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US');
    myClockFace.innerHTML = time;
}

tick()
// makes sure that the time shows up immediately when refreshed

setInterval(tick, 1000);

const setBackground = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
// https://css-tricks.com/snippets/javascript/random-hex-color/
// source for the random color generator code
myButton.addEventListener("click", 
    setBackground);


const setBackgroundColorBackToNormal = () => {
    body.style.backgroundColor = "#eeccd9";
 }
myButton2.addEventListener("click", 
    setBackgroundColorBackToNormal);
    
console.log(myClockFace)
console.log(myButton)
console.log(body)