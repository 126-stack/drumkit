var n=document.querySelectorAll(".drum").length;
for(var i=0; i<n; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var st=this.innerHTML;
makeSound(st);
animation(st);
});


}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animation(st);
});

function makeSound(key)
{
  switch(key){
  case "w":
  var tom1=new Audio('sounds/tom-1.mp3');
  tom1.play();
  break;

  case "a":
  var tom2=new Audio('sounds/tom-2.mp3');
  tom2.play();
  break;

  case "s":
  var tom3=new Audio('sounds/tom-3.mp3');
  tom3.play();
  break;

  case "d":
  var tom4=new Audio('sounds/tom-4.mp3');
  tom4.play();
  break;

  case "j":
  var crash=new Audio('sounds/crash.mp3');
  crash.play();
  break;

  case "k":
  var st=new Audio('sounds/st.mp3');
  st.play();
  break;


  case "l":
  var snare=new Audio('sounds/snare.mp3');
  snare.play();
  break;

  default:
  alert("no button clicked");
  }
}

function animation(currentkey)
{
var activebutton=document.querySelector("."+ currentkey);
activebutton.classList.add("pressed");
setTimeout(function(){
activebutton.classList.remove("pressed");
},100);

}
