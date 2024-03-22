function solution(numbers) {
  const frequency = {}; // 숫자의 등장 횟수를 저장할 객체
  let maxFrequency = 0; // 가장 많이 등장한 횟수
  let modes = []; // 최빈값들을 저장할 배열

  // 각 숫자의 등장 횟수 세기
  numbers.forEach(number => {
    if (frequency[number]) frequency[number]++;
    else frequency[number] = 1;

    // 최대 등장 횟수 업데이트
    if (frequency[number] > maxFrequency) {
      maxFrequency = frequency[number];
    }
  });

  // 최빈값 찾기
  for (const number in frequency) {
    if (frequency[number] === maxFrequency) {
      modes.push(Number(number));
    }
  }

  // 최빈값이 여러 개인 경우 -1 반환
  if (modes.length > 1) {
    return -1;
  } else {
    // 최빈값이 하나면 그 값을, 여러 개면 -1을 반환
    return modes[0];
  }
}