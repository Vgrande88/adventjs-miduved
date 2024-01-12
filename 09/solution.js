function adjustLights(lights) {
	let objectLights = ['🟢', '🔴']
	let first = lights[0]
  let count = 0
  let current = first
  for (let light of lights) {
  	if(light === current) {
       	count++
        current = objectLights.filter((li) => li != current)[0]
    }else { 
    	current = light
    }
	}

  return Math.min(count, lights.length - count)
}