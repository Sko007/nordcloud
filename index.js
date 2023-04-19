//create Datastructure

// make an object from tuple
const coordinatesStation = [{x:0, y:0, reach: 9}, {x:20, y:20, reach: 6}, {x:10, y:0, reach: 12}, {x:5, y:5, reach:13},{x:99, y:25, reach: 2}]
const coordinatesDevice = [{x:0 , y: 0}, {x:100, y: 100}, {x:15, y:10}, {x:18, y:18}, {x:13,y:13}, {x:25, y: 99}]


//distances for device
const distanceDeviceStation1 = []
const distanceDeviceStation2 = []
const distanceDeviceStation3 = []
const distanceDeviceStation4 = []
const distanceDeviceStation5 = []


//calculate Distance between device and networkStations

function calculateDistance(){
for (i=0; coordinatesStation.length > i; i++){
	for(j=0; coordinatesDevice.length > j; j++){
if(coordinatesStation[i].x == undefined || coordinatesDevice[j].y == undefined || coordinatesDevice[j].x== undefined || coordinatesStation[i].y == undefined ){return}
let coordinateX = coordinatesStation[i].x - coordinatesDevice[j].x
let coordinateY = coordinatesStation[i].y - coordinatesDevice[j].y

//calculate Distance

const distance = Math.sqrt(coordinateX *coordinateX + coordinateY * coordinateY)

if(i == 0){
distanceDeviceStation1.push(distance)

}
if(i == 1){
distanceDeviceStation2.push(distance)

}
if(i ==2){
distanceDeviceStation3.push(distance)
	
}
if(i ==3){
distanceDeviceStation4.push(distance)
}
if(i ===4){
distanceDeviceStation5.push(distance)
}

	}

}	

return 
}

calculateDistance()
//shortest distance for device
const minValueDevice1 = Math.min(...distanceDeviceStation1)
const minValueDevice2 = Math.min(...distanceDeviceStation2)
const minValueDevice3 = Math.min(...distanceDeviceStation3)
const minValueDevice4 = Math.min(...distanceDeviceStation4)
const minValueDevice5 = Math.min(...distanceDeviceStation5)

const speed1 = Math.pow(9- minValueDevice1, 2)
const speed2 = Math.pow(9- minValueDevice2, 2)
const speed3 = Math.pow(9- minValueDevice3, 2)
const speed4 = Math.pow(9- minValueDevice4, 2)
const speed5 = Math.pow(9- minValueDevice5, 2 )


function calculateBestDistance(id){

if(minValueDevice1 <= 9){
console.log(`Device1 is in range the best distance is ${minValueDevice1} with speed ${speed1}`)
}else{

console.log(`Device1 is out of range the distance is ${minValueDevice1} with speed ${speed1}`)

}

if(minValueDevice2 <= 6){
console.log(`Device2 is in  range the best distance is ${minValueDevice2} with speed ${speed2}`)
}else{

console.log(`Device2 is out of range the distance is ${minValueDevice2} with speed ${speed2}`)

}

if(minValueDevice3 <= 12){
console.log(`Device3 is in range the  best distance is ${minValueDevice3} with speed ${speed3}`)
}else{

console.log(`Device3 is out of range the distance is ${minValueDevice3}`)

}

if(minValueDevice4 <= 13){
console.log(`Device4 is in range the best distance is ${minValueDevice4} with speed ${speed4}`)
}else{

console.log(`Device4 is out of range the distance is ${minValueDevice4}`)

}

if(minValueDevice5 <= 2){
console.log(`Device5 is in range the best distance is ${minValueDevice5} with speed ${speed5}`)
}else{

console.log(`Device5 is out of range the distance is ${minValueDevice5}`)

}

}
calculateBestDistance(1)
