function countDivisors(num) {
    let count = 0;

    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            if (i * i === num) {
                count++;
            } else {

                count += 2;
            }
        }
                if(count >2) return false
    }
    return true

}

function solution(nums) {
    let count =0;

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length ; j++) {

            for (let k = j + 1 ; k < nums.length  ; k++) {

                let sum=nums[i]+nums[j]+nums[k]

                if(countDivisors(sum)){
                    count++;
                }
            }
        }
    }
    return count;
}