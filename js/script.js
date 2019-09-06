

// commit 1 & commit 2

// event.preventDefault() stops the page from refreshing

// const color = document.getElementById('color-field').value; - we get the
// class called color-field  and we use .value to actually type in the bar.
// brus.style.background is used to update the color of the square.


function crayon(){
  event.preventDefault();
  const color = document.getElementById('color-field').value;
    document.querySelector('.brush').style.background = color;

};

document.getElementById('set-color').addEventListener('click', crayon);

//

// commit 4 & commit 5
// this was created to change color to green orignally this.style.background =
// "green";
// since line 14 was the cause of how we changed the color of the box by inputting
// a value, hence why I copied it and replaced the green hence this is it currently.
function change() {
  this.style.background = document.getElementById('color-field').value;

}
// commit 3
// A for loop was used to orignally make 20 square hence i<8000 used to be
// // i<20.

// commit 6 changed i<8000, and changed click to mouseover.
for (let i = 0; i < 8000; i++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'square');
  div.addEventListener('mouseover' , change);
  document.body.appendChild(div);
};
