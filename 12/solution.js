function checkIsValidCopy(original, copy) {
	const chars = ["#", "+", ":", ".", " "];
  for(let [index, letter] of original.split("").entries()){
    if(chars.includes(letter)) {
      if(chars.indexOf(original[index]) > chars.indexOf(copy[index])) {
        return false
      }
    }  
    if(original[index] !== copy[index]){
      if(original[index].toLowerCase() !== copy[index]) {
        
        if(!chars.includes(copy[index])) return false
      }
    } 
  }
  
  return true

}