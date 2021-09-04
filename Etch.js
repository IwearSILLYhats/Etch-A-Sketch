const slider = document.getElementById('sliderRange');
let resolution = slider.value;
const leftKnob = document.getElementById('leftKnob');
const rightKnob = document.getElementById('rightKnob');
let color = false;
function createGrid(size){
    clearGrid();
    let canvas = document.getElementById('canvas');

    for (i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);

    }
    canvas.childNodes.forEach(e => {
        for (j = 0; j < size; j++){
        let paint = document.createElement('div');
        paint.classList.add('paint');
        e.appendChild(paint);
        }
    })
colorIn();
}
//creates a div with class 'row' then  appends it to 'canvas' then creates a number of inner divs equal to 'resolution' with a class of 'paint' and appends them to row[i]. Then it loops and creates another 'row' and repeats (resolution -1) times. Finally, adds an event listener to every newly created 'paint class


function clearGrid(){
while(canvas.firstChild){
    canvas.removeChild(canvas.firstChild);
}
}

function colorIn (){
    const paint = document.querySelectorAll('.paint');
    paint.forEach(item => {
        item.addEventListener('mouseenter', function (event) {
            if(color === false){
        event.target.style.backgroundColor = "black";
            }
            else{
                event.target.style.backgroundColor = getRandomColor();
            }
        })
    });
}
//changes color of grid cell to black when mouse hovers over it

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let colors = '#';
    for (var i = 0; i < 6; i++) {
      colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
  }

 leftKnob.addEventListener('click', function() {createGrid(resolution)});

 rightKnob.addEventListener('click', function() {
    if(color === true){
        color = false;
        rightKnob.firstElementChild.textContent = "Color";
    }
    else{
        color = true;
        rightKnob.firstElementChild.textContent = "Black";
    }
 });

 slider.oninput = function (){
     resolution = slider.value;
document.getElementById('resolution').textContent = resolution + " x " + resolution;
createGrid(resolution);
 };