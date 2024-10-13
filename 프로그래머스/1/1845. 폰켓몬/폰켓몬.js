function solution(nums) {
        let answer = 0;

    const set = new Set(nums);
    
    const numsLength = parseInt(nums.length)/2;
    const setSize = set.size;
    console.log(numsLength)
    
    if(setSize < numsLength) return answer=setSize
    
    return answer=numsLength;
}