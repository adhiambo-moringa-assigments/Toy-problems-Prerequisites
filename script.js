//here will calculating the speed
let speedLimit =(speed)=>{
    let points =(speed-70)/5
    if(speed<70){
        return 'Ok'
    }
    else if(speed>=70 && points<=12){
        return (points)
    }
    else if(points>12){
        return 'license suspended'
    }  
}
console.log(speedLimit(160))