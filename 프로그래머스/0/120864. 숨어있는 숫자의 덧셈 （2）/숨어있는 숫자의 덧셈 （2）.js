function solution(my_string){
  return my_string.split(/\D+/).reduce((a,c) => a+Number(c),0)
}
solution("aAb1B2cC34oOp")