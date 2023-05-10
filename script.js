gridArea = document.getElementById('gridArea');

let num = 16;
let size = 500/num;

for(let i = 0; i < (num*num); i++){
  div = document.createElement('div');
  div.classList.add('gridItem');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  gridArea.appendChild(div);
}

gridItems = document.querySelectorAll('.gridItem');

gridItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.className = 'selected';
  });
});