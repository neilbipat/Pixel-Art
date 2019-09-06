

// commit 1 & commit 2

function crayon(){
  event.preventDefault();
  const color = document.getElementById('color-field').value;
    document.querySelector('.brush').style.background = color;

};

document.getElementById('set-color').addEventListener('click', crayon);

//  commit 3 & 4

// commit 5
function change() {
  this.style.background = document.getElementById('color-field').value;

}

for (let i = 0; i < 20; i++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'square');
  div.addEventListener('click' , change);
  document.body.appendChild(div);
};

//
