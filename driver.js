var c = document.getElementById("ascii");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;
var a = new AsciiDrawer(c,20);
var i=0;
/*for(var key in letters){
  a.character = key;
  a.writeLetter(key,(i%13)*6,Math.floor(i/13)*7,1);
  console.log(key);
  i++;
}*/
a.writeText("TEST TEXT",0,0,1);
a.draw();