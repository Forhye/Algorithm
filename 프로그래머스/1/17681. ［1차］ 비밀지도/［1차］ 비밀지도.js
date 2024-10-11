function binary(arr) {
    return arr.map(item => item.toString(2));
}

function changeShape(n, array) {
    return array.map(item => {
        item = item.padStart(n, '0');
        return item.split('').map(char => char === '1' ? '#' : ' ').join('');
    });
}

function solution(n, arr1, arr2) {
    let newArray1 = binary(arr1);
    let newArray2 = binary(arr2);
    
    let shape1 = changeShape(n, newArray1);
    let shape2 = changeShape(n, newArray2);
    
    return shape1.map((row, i) => 
        row.split('').map((char, j) => 
            char === '#' || shape2[i][j] === '#' ? '#' : ' '
        ).join('')
    );
}