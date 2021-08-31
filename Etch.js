
//create a grid in 'canvas' container with an equal number of columns and rows
//create button, field, slider to adjust size of grid dynamically
//changes color of grid cell to black when mouse hovers over it

const resolution = document.getElementById('sliderRange').getAttribute('value');
const leftKnob = document.getElementById('leftKnob');
const rightKnob = document.getElementById('rightKnob');
const paint = document.getElementsByClassName('paint');

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
        paint.textContent = j + 1;
        e.appendChild(paint);
        }
    })

}
//creates a div with class 'row' then  appends it to 'canvas' then creates a number of inner divs equal to 'resolution' with a class of 'paint' and appends them to row[i]. Then it loops and creates another 'row' and repeats.


function clearGrid(){
while(canvas.firstChild){
    canvas.removeChild(canvas.removeChild);
}
}

leftKnob.addEventListener('click', createGrid(resolution));