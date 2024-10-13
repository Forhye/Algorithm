function solution(a, b) {
    const day = ["WED","THU","FRI","SAT","SUN","MON","TUE"]
    
    const monthDays = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
    
    return day[parseInt(( 1 + monthDays[a-1] + b) % 7)]
    
}