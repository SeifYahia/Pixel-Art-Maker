function makeGrid() { // the function that makes the grid 

    const h = Number(document.getElementById('inputHeight').value); // this is where the user inputs the height of the grid
    const w = Number(document.getElementById('inputWidth').value); // this is where the user inputs the width of the grid
    const t = document.getElementById('pixelCanvas'); // brings the table so we can use it 
    t.innerHTML = '';
    for (let i = 0; i < h; i++) { // the loop makes the rows
        const tr = document.createElement('tr');
        for (let j = 0; j < w; j++) { // the loop makes the columns
            const td = document.createElement('td');
            tr.appendChild(td); // appends the rows and columns together
        }
        t.appendChild(tr); // appends the rows and columns to the table 
    }

    change(); // calls the function which changes colors the pixels when the user makes the grid
}

function change() { // the function that changes the color of pixels on the grid
    const d = document.querySelectorAll('td'); // calls all pixels in the grid
    const clr = document.getElementById('colorPicker'); // this is where the user can choose the color
    for (let x = 0; x < d.length; x++) { // loops the pixels to change the color of them
        d[x].addEventListener('click', function(s) {
            // changes the color of the pixels when the user clicks on any pixel according to the selected color
            s.target.style.backgroundColor = clr.value;
        });
    }
}
const submit = document.getElementById('submit');
submit.addEventListener('click', function(j) {
    j.preventDefault();
})