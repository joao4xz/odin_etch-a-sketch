gridArea = document.getElementById('gridArea');
//div = document.createElement('div');

let num = 16;
let size = 500/num;

for(let i = 0; i < (num*num); i++){
  div = document.createElement('div');
  div.classList.add('gridItem');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  gridArea.appendChild(div);
}