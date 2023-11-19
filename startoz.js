Warmup-1 -- startOz
Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

Examples

startOz('ozymandias') → oz
startOz('bzoo') → z
startOz('oxx') → o

function startOz(str){
    if(str[0]==="o" && str[1] ==="z"){
    return "oz"
    }if(str[0] === "o"){
    return "o"
    }if(str[1] === "z"){
    return "z"
    }return ""
  }console.log(startOz('ozymandias'));