

// commit 1 & commit 2

function crayon(){
  event.preventDefault();
  const color = document.getElementById('color-field').value;
    document.querySelector('.brush').style.background = color

};

document.getElementById('set-color').addEventListener('click', crayon);











// document.querySelector("#set-color").addEventListener('click',function(e)
// {
//   console.log(e);
//
//
// });
//
// // How can I make pressing the button affect the color of the box?
//
// I know that the color of the box is affected by style.Color
//
// document.querySelector(".brush").style.
//
// function(b){
//   b.style.color();
//   console.log("hi");
