Warmup-1 -- frontBack
Given a string, return a new string where the first and last chars have been exchanged.

Examples

frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba

function frontBack(str){
    let front = str[0]
    let back = str[str.length-1]
  return back + str.slice(1, str.length-1)+ front
}console.log(frontBack('code'));