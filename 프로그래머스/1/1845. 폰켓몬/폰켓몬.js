function solution(nums) {
    const set = new Set(nums);
    
    return set.size < parseInt(nums.length)/2 ? set.size : parseInt(nums.length)/2
}