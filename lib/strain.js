'use strict';

var strain = {
  keep: function(argArray, callback){
    var index;
    var answerArray = [];
    for	(index = 0; index < argArray.length; index++) {
      if (callback(argArray[index]) == true) {
        answerArray.push(argArray[index]);
        }
      }
   return answerArray;
 },

  discard: function(argArray, callback){
    var index;
    var answerArray = [];
    for	(index = 0; index < argArray.length; index++) {
      if (callback(argArray[index]) == false) {
        answerArray.push(argArray[index]);
        }
      }
   return answerArray;
  }

};
