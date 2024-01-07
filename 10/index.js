function createChristmasTree(ornaments, height) {
  let trunk = (' ').repeat(height-1) + '|\n'
  let total = ((height * (height-1))/2)+height
  let arrayOrnaments = (ornaments).repeat(total)
  let tree = ''
  for(let i = 1; i<=height; i++){
  	let char = arrayOrnaments.slice(0, i)
    let arr = Array.from(char).join(' ');
    let element = (' ').repeat((height-i)).concat(arr)
    tree = tree.concat(element)+'\n'
   	arrayOrnaments =	arrayOrnaments.substring(i)
  }
  return tree+trunk
}