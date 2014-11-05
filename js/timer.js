/* Copyright 2014 Sun Sibai */
function timerClickEvent(obj) {
 obj.timerTime=obj.attributes.timerTime.value;
 if (obj.timerInterval) {
  clearInterval(obj.timerInterval);
  obj.timerInterval=undefined;
 } else {
  if (obj.startTime) {
   obj.startTime=undefined;
   obj.text=toMMSSmm(obj.timerTime);
// obj.style.backgroundImage="-webkit-gradient(linear, 0 0, .1% 0, from(rgb(230, 100, 0)), to(rgb(250,250,180)));-webkit-linear-gradient(left, rgb(230, 100, 0) 0, rgb(250,250,180) .1%);-moz-linear-gradient(left, rgb(230, 100, 0) 0, rgb(250,250,180) .1%);-ms-linear-gradient(left, rgb(230, 100, 0) 0, rgb(250,250,180) .1%);-o-linear-gradient(left, rgb(230, 100, 0) 0, rgb(250,250,180) .1%);linear-gradient(left, rgb(230, 100, 0) 0, rgb(250,250,180) .1%);";
   obj.style.backgroundImage="-moz-linear-gradient(left, rgb(230, 100, 0) 0, rgb(250,250,180) .1%)"; //firefox
  } else {
   obj.startTime=(new Date()).getTime();
   obj.timerInterval=setInterval("update("+obj.id+")",200);
  }
 }
}
function stop(obj) {
 obj.text=toMMSSmm(0);
 clearInterval(obj.timerInterval);
 obj.timerInterval=undefined;
}
function update(obj) {
 var nDate=(new Date()).getTime();
 if (obj.startTime) {
  var leftTime=obj.timerTime-nDate+obj.startTime;
  if (leftTime<=0) {
   stop(obj);
  } else {
   obj.text=toMMSSmm(leftTime);
//   obj.style.backgroundImage="-webkit-gradient(linear, "+(1-leftTime/obj.timerTime)*100+" 0, "+((1-leftTime/obj.timerTime)*100+0.1)+"% 0, from(rgb(230, 100, 0)), to(rgb(250,250,180)));-webkit-linear-gradient(left, rgb(230, 100, 0) "+(1-leftTime/obj.timerTime)*100+"%, rgb(250,250,180) "+((1-leftTime/obj.timerTime)*100+0.1)+"%);-moz-linear-gradient(left, rgb(230, 100, 0) "+(1-leftTime/obj.timerTime)*100+"%, rgb(250,250,180) "+((1-leftTime/obj.timerTime)*100+0.1)+"%);-ms-linear-gradient(left, rgb(230, 100, 0) "+(1-leftTime/obj.timerTime)*100+"%, rgb(250,250,180) "+((1-leftTime/obj.timerTime)*100+0.1)+"%);-o-linear-gradient(left, rgb(230, 100, 0) "+(1-leftTime/obj.timerTime)*100+"%, rgb(250,250,180) "+((1-leftTime/obj.timerTime)*100+0.1)+"%);linear-gradient(left, rgb(230, 100, 0) "+(1-leftTime/obj.timerTime)*100+"%, rgb(250,250,180) "+((1-leftTime/obj.timerTime)*100+0.1)+"%);";
  obj.style.backgroundImage="-moz-linear-gradient(left, rgb(230, 100, 0) "+(1-leftTime/obj.timerTime)*100+"%, rgb(250,250,180) "+((1-leftTime/obj.timerTime)*100+0.1)+"%)"; //firefox
}
 } else {
  obj.startTime=nDate;
 }
}
function toMMSSmm(intTime) {
 var mm=intTime%1000;
 var ss=Math.floor(intTime/1000);
 var MM=Math.floor(ss/60);
 var SS=ss%60;
 mm=Math.floor(mm/10);
 if (MM<10) {MM="0"+MM;}
 if (SS<10) {SS="0"+SS;}
 if (mm<10) {mm="0"+mm;}
 return MM+":"+SS+":"+mm;
}
/* Extension: ChangeText */
function changeTextEvent(obj) {
 if (obj.state) {obj.text="Make a Difference";obj.state=false;}
 else {obj.text="1.01^365=37.8 0.99^365=0.03";obj.state=true;}
}
