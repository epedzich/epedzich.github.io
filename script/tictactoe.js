var restart = document.querySelector('#b');

var squares = document.querySelectorAll('td');

function clearBoard() {
    for (var i=0; i < squares.length; i++){
        squares[i].className = '';
    }
}

restart.addEventListener('click', clearBoard);

function changeMarker() {
    if (this.className === ''){
        this.className = 'pine'
    }else if (this.className === 'pine'){
        this.className = 'coco'
    }else{
        this.className = ''
    }
}

for (var i =0; i < squares.length; i++){
    squares[i].addEventListener('click', changeMarker)
}
