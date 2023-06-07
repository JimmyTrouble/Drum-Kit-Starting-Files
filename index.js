// let btn = document.querySelectorAll(".drum");
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     let btnClass = this.classList[0];
//     switch (btnClass) {
//       case "w":
//         let tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         let tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         let tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         let snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       default:
//         console.log(btnClass);
//     }
//   });
// }

// document.addEventListener("keypress", function (event) {
//   console.log(event);
// });

let k = document.addEventListener("keypress", function (event) {
  correctSound(event.key);
  buttonAnimation(event.key);
});

let btn = document.querySelectorAll(".drum");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    correctSound(this.classList[0]);
    buttonAnimation(this.classList[0]);
  });
}

function correctSound(str) {
  switch (str) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
  }
}

function buttonAnimation(key) {
  let pressedBTN = document.querySelector("." + key);
  pressedBTN.classList.add("pressed");

  setTimeout(function () {
    pressedBTN.classList.remove("pressed");
  }, 100);
}
