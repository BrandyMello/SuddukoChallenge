//Psuedo Code

//There are three arrays, each with three integers per row
//There are nine rows and nine columns, each of nin integers
//True or false is the requested return - boolean

//Give a row a name
//Give each column a name
//Go through each number in the row (until check 9 numbers), if a number is repeated name the row and column where a number is a repeat and let the player know the play was not accurate
//Go through the first number of the first group and every third grouping (array) - until 9 numbers are checked, if it repeats...
  //Go through the second column...
  //Go through the third/last column...
//Go through the first number in the second grouping and every third grouping...
  //Go through the second..
  //Go through the third or last...
//Go through the first row of the third grouping
  //Go through the second column...
  //Go through the  third and final...

//When a number repeats a statement is to be returned with that spot... Should it keep going in case there is more that one error?

const input1 = [
  [4,3,5], [2,6,9], [7,8,1],
  [6,8,2], [5,7,1], [4,9,3],
  [1,9,7], [8,3,4], [5,6,3],
  [8,2,6], [1,9,5], [3,4,7],
  [3,4,7], [6,8,2], [9,1,5],
  [9,5,1], [7,4,3], [6,2,8],
  [5,1,9], [3,2,6], [8,7,4],
  [2,4,8], [9,5,7], [1,3,6],
  [7,6,3], [4,1,8], [2,5,9]
]

const isVailid = true;

const checkRow = (game) => {
  //if the index is 0 to 2 name it row1
  //if the index is 3 to 5 name it row2, etc.
  //flatten the first three arrays
  //filter for a repeating integer and its index in a conditional
  //if false, moves onto the next
  //if true (that one repeats), return name of row
 
}

const checkColumn = (game) => {
  for(i=0; i < 27; i++) {
    for (j=0; j < 3; j++) {
      const filterColumn = game.map(columnElement => if(filterColumn.includes(columnElement[i][j])
      if()
    }
    
  }
}
