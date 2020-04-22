window.onload = function(){
//  console.log(navigator);
try{
   var d = new Date();
  var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toDateString();
}}catch(e){}

try{
const gl = document.createElement('canvas').getContext('webgl');
const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
document.getElementById("gpu").innerHTML = debugInfo.UNMASKED_RENDERER_WEBGL + 'by' +debugInfo.UNMASKED_VENDOR_WEBGL;}catch(e){}
try{
document.getElementById("size").innerHTML =  "screen size: " + screen. width + "px * " + screen. height +"px";}catch(e){}
try{

var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

function logBattery(battery) {

  battery.addEventListener('levelchange', function(){
    document.getElementById("bat-lvl").innerText = "battery level: " + battery.level * 100 +"%";
  });

    document.getElementById("bat-lvl").innerText = "battery level: " + battery.level * 100 +"%";
    //  document.getElementById("b3").innerText = battery.dischargingTime;
if(battery.charging){
  document.getElementById("bat-chrg").innerHTML ="Charging ";
}else {
    document.getElementById("bat-chrg").innerHTML ="Not charging ";
}


    battery.addEventListener('chargingchange', function() {
      if(battery.charging){
        document.getElementById("bat-chrg").innerHTML ="Charging ";
      }else {
          document.getElementById("bat-chrg").innerHTML ="Not charging ";
      }
    }, false);
}

if (navigator.getBattery) {
    navigator.getBattery().then(logBattery);
} else if (battery) {
    logBattery(battery);
}}catch(e){}


try{

 function on1(){

if(navigator.onLine){

var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.effectiveType;
document.getElementById("conn-type").innerHTML ="Connection type : " + type ;
} else {
document.getElementById("conn-type").innerHTML = "offline"
  }

function updateConnectionStatus() {
  if(navigator.onLine){

  type = connection.effectiveType;
  document.getElementById("conn-type").innerHTML ="Connection type : " + type;
  //navigator.vibrate(500);
}else {
document.getElementById("conn-type").innerHTML = "offline"
  }   }
connection.addEventListener('change', updateConnectionStatus);
 }
 window.addEventListener('online',  on1);
   window.addEventListener('offline', on1);
 on1();
}catch(e){}
try{
var memory = navigator.deviceMemory || window.navigator.deviceMemory;
document.getElementById("ram").innerText = "Ram : " + memory + " GB.";
}catch(e){}
try{
  const oscpuInfo = window.navigator.hardwareConcurrency;
document.getElementById("cpu").innerText ="cpu cores: " + oscpuInfo +" .";
}catch(e){}
try{
document.getElementById("ua").innerText = window.navigator.userAgent;
}catch(e){}
} // end
