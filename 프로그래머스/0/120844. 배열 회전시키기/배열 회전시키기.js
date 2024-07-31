function solution(numbers, direction) {
    if (direction === "right"){
        numbers = [numbers.pop(), ...numbers];
        // 배열의 맨 뒤를 삭제한 배열, 과 나머지 배열을 넣어줌
    } else {
        numbers = [...numbers.slice(1), numbers.shift()]
        // 나머지 배열과 배열의 첫번째를 잘라내고
        // 배열 맨 앞의 값을 shift 해서 뒤에 넣어준다
    }
    return numbers
}