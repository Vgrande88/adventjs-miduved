function maxGifts(houses) {
    let previous = 0
    let total = 0
    for(const i in houses){
      let sumPrevious = previous + houses[i]
      previous = total
      total = sumPrevious > total ? sumPrevious : total
    }
    return total
}