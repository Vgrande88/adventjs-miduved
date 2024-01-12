function calculateTime(deliveries) {
    const topHours = '07:00:00'
    let totalTime = '00:00:00'

    function timeToSeconds (time)
    {
        let [hour, minute, seconds] = time.split(':').map(Number)
        return hour*3600 + minute*60 + seconds
    }

    function secondsToTimeString(seconds) {
        let h = Math.floor(seconds/3600).toString().padStart(2,0)
        let m = Math.floor((seconds%3600)/60).toString().padStart(2,0)
        let s = (seconds % 60).toString().padStart(2,0)
        return `${h}:${m}:${s}` 
    }

    function addTime(current, first){
        let firstTime = timeToSeconds(first)
        let currentTime = timeToSeconds(current)
        let totalTime =  secondsToTimeString(firstTime + currentTime)
        return totalTime
    }

    deliveries.forEach((element) => {
        totalTime = addTime(element, totalTime)
    });

    const topHoursFinal = timeToSeconds(topHours)
    const totalTimeFinal = timeToSeconds(totalTime)
    if(topHoursFinal <= totalTimeFinal){
        const result = secondsToTimeString(totalTimeFinal-topHoursFinal)
        return result
    }
    const result = '-'.concat(secondsToTimeString(topHoursFinal-totalTimeFinal))
    return result
  }