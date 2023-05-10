makeGrid(3);
changeGridSize();
clearItemColor();

function makeGrid(num) {
  gridArea = document.getElementById('gridArea');

  let size = 500 / num;

  for (let i = 0; i < (num * num); i++) {
    div = document.createElement('div');
    div.classList.add('gridItem');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    gridArea.appendChild(div);
  }
  changeItemColor();
}

function removeGrid(){
  while (gridArea.firstChild) {
    gridArea.removeChild(gridArea.firstChild);
  }
}

function changeItemColor() {
  gridItems = document.querySelectorAll('.gridItem');

  gridItems.forEach(item => {
  item.addEventListener('mouseover', () => {
      item.className = 'selected';
    });
  });
}

function clearItemColor() {
  button = document.getElementById('button');

  button.addEventListener('click', () => {
    gridSelectedItems = document.querySelectorAll('.selected');
    gridSelectedItems.forEach(item => {
      item.className = 'gridItem';
    });
  })
}

function changeGridSize(){
  let selectorText = document.getElementById('selectorText');
  
  let slider = document.getElementById('slider');

  slider.addEventListener('input', (e) => {
    selectorText.textContent = e.target.value;
    num = e.target.value;
    removeGrid();
    makeGrid(num);
  })
}