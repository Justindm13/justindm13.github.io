
// document.addEventListener('DOMContentLoaded', function() {
//     for (i=0; i<1024; i++) {
//     var div = document.createElement('div');
//     div.id = 'container'+i;
//     document.getElementById('gridContainer').appendChild(div);
//     document.getElementById(div.id).addEventListener('mouseover', function (){
//         // this.classList.add('gridContainerHoverAffect');
//         this.style.backgroundColor='black';
//     })
//     output.innerHTML = 50 + " X " + 50;
// }
// });

let outputSize = 50;

var slider = document.getElementById("userSelectedSize");
var output = document.getElementById("sliderOutput");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.onchange = function() {
    output.innerHTML = this.value + " X " + this.value;
    outputSize = this.value;
    setupGrid(outputSize);
  }


function setupGrid(output) {
    gridContainer.style.gridTemplateColumns = `repeat(${output}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${output}, 1fr)`
  
    for (i=0; i<output * output; i++) {
        var div = document.createElement('section');
        div.addEventListener('mouseover', function (){
            // this.classList.add('gridContainerHoverAffect');
            this.style.backgroundColor='black';
        })
        // div.id = 'container'+i;
        // console.log(i);
        document.getElementById('gridContainer').appendChild(div);
        // document.getElementById(div.id).addEventListener('mouseover', function (){
        //     // this.classList.add('gridContainerHoverAffect');
        //     this.style.backgroundColor='black';
        // })
  }
}

function colorSelector (color) {
    let backgroundColor = color;
    const divs = document.querySelectorAll('section');

    for (i=0; i<divs.length; i++) {
        const div = divs[i]
        div.addEventListener('mouseover', function (){
            if (color == 'rainbow') backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16); 
            this.style.backgroundColor=backgroundColor;
        })
    }
    output.innerHTML = 50 + " X " + 50;
}


document.getElementById('rainbowButton').addEventListener('click', function() {
   colorSelector('rainbow');
   const userSelectedSizeText = document.getElementById('userSelectedSize').value;
});

document.getElementById('blackButton').addEventListener('click', function() {
    colorSelector('black');
});

colorPicker.onchange = (e) => colorSelector(e.target.value)

document.getElementById('whiteButton').addEventListener('click', function() {
    colorSelector('#ededed');
});



document.getElementById('resetButton').addEventListener('click', function () {

    const divs = document.querySelectorAll('section');

    for (i=0; i<divs.length; i++) {
        const div = divs[i]
        div.style.backgroundColor='#ededed';
    }
})




window.onload = () => {
    setupGrid(50);
    output.innerHTML = 50 + " X " + 50;
  }