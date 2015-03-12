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
  var solution = []; 
  var board = new Board({'n':n});
  var counter =0;
  var nestedRow = [];
  //get every possible value
  var checkRooks = function(board){
    //check all conflicts, if there is a conflicts
    //toggle pices on board

    for (var row = 0; row <n; row++){
      var currentRow = this.get(row);
      for(var col = 0; col<n; col++){
        if(!(currentRow[col]) && counter <= n){
          board.togglePiece(row,col);
          if(!board.hasAnyRooksConflicts()){ 
            nestedRow.push(1);
            counter++;
            checkRooks(board);
          } else {
            nestedRow.push(0);
            board.togglePiece(row,col); 
          }
        }
      }
      solution.push(nestedRow);
    }
  }
  checkRooks(board);
  
  //if there are no conflicts, increment solution by 1

  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  debugger;
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
