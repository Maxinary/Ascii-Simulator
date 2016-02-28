"use strict"
class AsciiDrawer{
  constructor(canvas, charsize){
    this.character = " ";
    this.fillStyle = {color:"#00FF00", character:" "};
    this.bgColor = "#000000";
    this.charsize = charsize;
    this.canvas = canvas;
    
    //context setup
    this.context = canvas.getContext("2d");
    this.context.font = charsize.toString().concat("px Courier New");

    //drawing board setup
    this.board = [];
    for(var i=0;i<canvas.width/charsize*4/3;i++){//TODO Reverse the dimensions for speed
      this.board.push([]);
      for(var j=0;j<canvas.height/charsize*4/3;j++){
        this.board[i].push(this.fillStyle);
      }
    }
  }
  
  fillRect(x0,y0,x1,y1){
    for(var i=x0;i<x1;i++){
      for(var j=y0;j<y1;j++){
        if(i<this.board.length && i>=0 && j>=0 && j<this.board[0].length){
          this.board[i][j] = this.fillStyle;
        }
      }
    }
  }
  
  writeLetter(letter,x,y,size){
    for(var i=0;i<letters[letter].length*size;i++){
      for(var j=0;j<letters[letter][0].length*size;j++){
        if(letters[letter][Math.floor(i/size)][Math.floor(j/size)]
          && x+i>=0 && x+i<this.board.length//check for x overflow
          && y+j>=0 && y+j<this.board[0].length){
          this.board[x+i][y+j] = {character:letter,color:this.fillStyle.color};
        }
      }
    }
  }
  
  writeText(text, x, y, size){
    var letter;
    for(var count=0, width = 0;count<text.length;count++){
      letter = text.charAt(count);
      if(letters[letter]!==undefined){
        this.writeLetter(letter, x+width, y, size);
        width+=(letters[letter].length+1)*size;
      }else{
        width+=size*3;
      }
    }
  }
  
  widthOfText(string, size){
    var width = 0;
    for(var count=0;count<string.length;count++){
      if(letters[string.charAt(count)]){
        width+=(letters[string.charAt(count)].length+1)*size;
      }else{
        width+=size*3;
      }
    }
    return width;
  }
  
  draw(){
    this.context.fillStyle = this.bgColor;
    this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
    this.context.fillStyle = this.letterColor;
    for(var i=0;i<this.board.length;i++){
      for(var j=0;j<this.board[0].length;j++){
        if(this.board[i][j].character!=" "){
          this.context.fillStyle = this.board[i][j].color;
          this.context.fillText(this.board[i][j].character, i*this.charsize*3/4, (j+1)*this.charsize*3/4);
        }
      }
    }
  }
}