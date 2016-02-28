var f = false;
var t = true;
var letters = {
  "A" : [ 
      [t,t,t,t,t,f],
      [t,f,t,f,f,f],
      [t,f,t,f,f,f],
      [t,t,t,t,t,f],
      ],
  "B" : [ 
      [t,t,t,t,t,f],
      [t,f,t,f,t,f],
      [t,f,t,f,t,f],
      [f,t,t,f,t,f],
      [f,f,t,t,t,f]
      ],
  "C" : [ 
      [t,t,t,t,t,f],
      [t,f,f,f,t,f],
      [t,f,f,f,t,f],
      [t,f,f,f,t,f]
      ],
  "D" : [ 
      [t,t,t,t,t,f],
      [t,f,f,f,t,f],
      [t,f,f,f,t,f],
      [f,t,t,t,f,f]
      ],
  "E" : [ 
      [t,t,t,t,t,f],
      [t,f,t,f,t,f],
      [t,f,t,f,t,f],
      [t,f,t,f,t,f]
      ],
  "F" : [ 
      [t,t,t,t,t,f],
      [t,f,t,f,f,f],
      [t,f,t,f,f,f],
      [t,f,f,f,f,f]
      ],
  "G" : [
      [t,t,t,t,t,f],
      [t,f,f,f,t,f],
      [t,f,t,f,t,f],
      [t,f,t,t,t,f]
      ],
  "H" : [
      [t,t,t,t,t,f],
      [f,f,t,f,f,f],
      [f,f,t,f,f,f],
      [t,t,t,t,t,f]
      ],
  "I" : [
      [t,f,f,f,t,f],
      [t,t,t,t,t,f],
      [t,f,f,f,t,f]
      ],
  "J" : [
      [f,f,f,f,f,f],
      [f,f,f,f,f,t],
      [t,f,f,f,f,t],
      [t,t,t,t,t,t],
      [t,f,f,f,f,f]
      ],
  "K" : [
      [t,t,t,t,t,f],
      [f,f,t,f,f,f],
      [t,t,t,f,f,f],
      [f,f,t,t,t,f]
      ],
  "L" : [
      [t,t,t,t,t,f],
      [f,f,f,f,t,f],
      [f,f,f,f,t,f],
      [f,f,f,f,t,f]
      ],
  "M" : [
      [t,t,t,t,t,f],
      [t,f,f,f,f,f],
      [f,t,t,f,f,f],
      [t,f,f,f,f,f],
      [t,t,t,t,t,f]
      ],
  "N" : [
      [t,t,t,t,t,f],
      [f,t,f,f,f,f],
      [f,f,t,f,f,f],
      [f,f,f,t,f,f],
      [t,t,t,t,t,f]
      ],
  "O" : [
      [t,t,t,t,t,f],
      [t,f,f,f,t,f],
      [t,f,f,f,t,f],
      [t,t,t,t,t,f]
      ],
  "P" : [
      [t,t,t,t,t,f],
      [t,f,t,f,f,f],
      [t,f,t,f,f,f],
      [t,t,t,f,f,f]
      ],
  "Q" : [
      [t,t,t,t,t,f],
      [t,f,f,f,t,f],
      [t,f,f,f,t,f],
      [t,t,t,t,t,t],
      [f,f,f,f,f,t]
      ],
  "R" : [
      [t,t,t,t,t,f],
      [t,f,t,f,f,f],
      [t,t,t,f,f,f],
      [f,f,t,t,t,f]
      ],
  "S" : [
      [f,t,f,f,t,f],
      [t,f,t,f,t,f],
      [t,f,t,f,t,f],
      [t,f,f,t,f,f]
      ],
  "T" : [
      [t,f,f,f,f,f],
      [t,t,t,t,t,f],
      [t,f,f,f,f,f]
      ],
  "U" : [
      [t,t,t,t,t,f],
      [f,f,f,f,t,f],
      [f,f,f,f,t,f],
      [t,t,t,t,t,f]
      ],
  "V" : [
      [t,t,t,f,f,f],
      [f,f,f,t,f,f],
      [f,f,f,f,t,f],
      [f,f,f,t,f,f],
      [t,t,t,f,f,f]
      ],
  "W" : [
      [t,t,t,t,t,f],
      [f,f,f,f,t,f],
      [f,f,f,t,t,f],
      [f,f,f,f,t,f],
      [t,t,t,t,t,f]
      ],
  "X" : [
      [t,f,f,f,t,f],
      [f,t,f,t,f,f],
      [f,f,t,f,f,f],
      [f,t,f,t,f,f],
      [t,f,f,f,t,f]
      ],
  "Y" : [
      [t,f,f,f,f,f],
      [f,t,f,f,f,f],
      [f,f,t,t,t,f],
      [f,t,f,f,f,f],
      [t,f,f,f,f,f]
      ],
  "Z" : [
      [t,f,f,f,t,f],
      [t,f,f,t,t,f],
      [t,f,t,f,t,f],
      [t,t,f,f,t,f],
      [t,f,f,f,t,f]
      ]
};