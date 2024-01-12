function organizeGifts(gifts) {
	let numbers = gifts.match(/[0-9 , \.]+/g)
	let characters = gifts.match(/[a-zA-Z , \.]+/g)
  let gift=""
  for(let index in numbers){
  	const total = (numbers[index]/10).toString()
   	const floatingNumber= total.split('.')
    const div = floatingNumber[0]/5
    gift += ("["+characters[index]+"]").repeat(div)
    const mod = floatingNumber[0]%5
    gift += ("{"+characters[index]+"}").repeat(mod)
    if(floatingNumber.length > 1){
			gift += "("+(characters[index]).repeat(floatingNumber[1])+")"
    }
  }
  return gift

}