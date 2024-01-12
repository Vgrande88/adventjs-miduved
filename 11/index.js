function getIndexsForPalindrome(word) {
  const isPalindrome = (string) => {
    return string === string.split("").reverse().join("")
  }
  
  if(isPalindrome(word)) return []
  for(let i = 0; i < word.length; i++)
  {
  	for(let j=i; j< word.length ; j++)
    { 
    	let arr = word.split("")
    	arr[i] = word[j]
      arr[j] = word[i]
      if(isPalindrome(arr.join(""))) return [i,j];
    }
  }

  return null
}