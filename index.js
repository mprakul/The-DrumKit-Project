function playSound(pressedKey)
{
  switch(pressedKey)
  {
      case "w" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
      case "a" :
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
      case "s" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
      case "d" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
      case "j" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
      case "k" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
      case "l" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

      default:
              console.log(buttonInnerHTML); // Good Practice
        }
}

function buttonAnimation(event)
{
   var activeButton = document.querySelector("." + event);

   // Now we need to add the .pressed class to the element pointed to by activeButton

   activeButton.classList.add("pressed");

   // Now we want to remove this class but after some delay

   setTimeout(function(){
     activeButton.classList.remove("pressed");
   }, 100);
}

for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", clickOnButton);
}

// to detect any button was pressed on website
function clickOnButton()
{
//  alert("Clicked on Button");
  var buttonInnerHTML = this.innerHTML;
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// to detect if any key was pressed on the keyboard
document.addEventListener("keydown", function(event){
       playSound(event.key);
       buttonAnimation(event.key);
    //  alert("Key is Pressed!!");
  });
