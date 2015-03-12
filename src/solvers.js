/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({'n':n});
 
  //get every possible value
  var checkRooks = function(row, count){
    if (count === 0){
      return;
    }

      solution.togglePiece(row, count - 1);
      if (solution.hasAnyRooksConflicts()){
        solution.togglePiece(row, count - 1);
      }
      checkRooks(row + 1, count - 1);
    }
  
    checkRooks(0, n);


  
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;
  var solution = new Board({'n':n});
  var numPieces = 0;

  var checkRooks = function(rooks){
    //if there is no rooks then add to solution
    if(rooks === 0){
      solutionCount++;
      return;
    }
    //use for lopp for row
    for (var col = 0; col < n; col ++){
      //to get col we can take # of n - rooks
      var row = n - rooks;
      //we add piece to board
      solution.togglePiece(row,col);
      
      //if there is any rooks then we want to toggle them off
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(row,col);
      } else {
          //if we are keeping toggle there then we rooks -1
          rooks--;
          checkRooks(rooks);
          solution.togglePiece(row,col);
          rooks++;
        }
      }
    }
    // if (row === n){
    //   return;
    // }

    // for ( var column = 0; column < n; column++){
    //   var currentRow = solution.get(row);
    //   for (var i = 0; i < currentRow.length; i++){
    //     if (currentRow[i] === 1){
    //        currentRow[i] = 0;
    //        numPieces--;
    //     }
       
    //   }
    //   solution.togglePiece(row, column);
    //   numPieces++;
    //   if (solution.hasAnyRooksConflicts()){
    //     solution.togglePiece(row, column);
    //     numPieces--;
    //   } else {
    //     if (numPieces === n){
    //       solutionCount++;
    //       solution.togglePiece(row, column);
    //     }
    //     checkRooks(row + 1);
    //   }
    // }

  
  checkRooks(n);
  // for (var i = 0; i < n; i++){  
  //   window.findNRooksSolution(n);
  // }
  console.log('multiple' + n + ' rooks:', JSON.stringify(solution));
 // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n':n});
   var solutionCount = 0; 
  var numPieces = 0;
  if(n === 0){
    return solution.rows();
  }

  var checkRooks = function(rooks){
    //if there is no rooks then add to solution
    if(solutionCount > 0) {
      return;
    } 

    if(rooks === 0){
      solutionCount++;
      return;
    }
    //use for lopp for row
    for (var col = 0; col < n; col ++){
      //to get col we can take # of n - rooks
      var row = n - rooks;
      //we add piece to board
      solution.togglePiece(row,col);
      
      //if there is any rooks then we want to toggle them off
      console.log("solution",n);
      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(row,col);
      } else {
          //if we are keeping toggle there then we rooks -1
          rooks--;
          checkRooks(rooks);
          solution.togglePiece(row,col);
          rooks++;
        }
      }
    }


  //get every possible value
  // var checkRooks = function(row, count){
  //   if (count === 0){
  //     return;
  //   }

  //     solution.togglePiece(row, count - 1);
  //     if (solution.hasAnyQueensConflicts()){
  //       solution.togglePiece(row, count - 1);
  //     }
  //     checkRooks(row + 1, count - 1);
  //   }
  
    checkRooks(n);


  
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  var solution = new Board({'n':n});
  var numPieces = 0;

  var checkRooks = function(rooks){
    //if there is no rooks then add to solution
    if(rooks === 0){
      solutionCount++;
      return;
    }
    //use for lopp for row
    for (var col = 0; col < n; col ++){
      //to get col we can take # of n - rooks
      var row = n - rooks;
      //we add piece to board
      solution.togglePiece(row,col);
      
      //if there is any rooks then we want to toggle them off
      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(row,col);
      } else {
          //if we are keeping toggle there then we rooks -1
          rooks--;
          checkRooks(rooks);
          solution.togglePiece(row,col);
          rooks++;
        }
      }
    }

    checkRooks(n);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
