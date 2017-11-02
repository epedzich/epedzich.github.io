var name1 = prompt('Witaj graczu nr 1! Podaj swoje imię. Będziesz grał niebieskimi:')
var name1_color = 'rgb(48, 115, 221)'

var name2 = prompt('Witaj graczu nr 2! Podaj swoje imię. Będziesz grał czerwonymi:')
var name2_color = 'rgb(209, 27, 20)'

var game_on = true

var table = $('table tr')

function reportWin(rowNum, colNum) {
    console.log('You won starting at this row,col')
    console.log(rowNum)
    console.log(colNum)
}

function changeColor(rowIndex, colIndex, color) {
    return table.eq(rowIndex).find('td').eq(colIndex). find('button').css('background-color', color)
}
function returnColor(rowIndex, colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color')
}

function checkBottom(colIndex) {
    var colorReport = returnColor(5, colIndex)
    for (var row = 5; row > -1; row --) {
        colorReport = returnColor(row, colIndex)
        if (colorReport === 'rgb(128, 128, 128)') {
            return row
        }
    }
}

function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}
