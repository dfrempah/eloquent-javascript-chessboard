var size = Number(prompt("What size do you want to build for?")); //accepting any number and using it as the size of the board
var row = ""; //initializing an empty board row 
var star = "*";
var space  = " ";
    for(var i = 0 ; i < size ; i++){
        for(var a = 0; a < size ; a++){
            if(a%2==0){ //printing a star for even numbers in the loop and spaces for odd numbers
                row += star; 
            }else{
                row += space ;
            }
        }
        console.log(row);//print current row 
        var temp = star; //new variable to swap the contents of "star" and "space" after each row.
        star = space ;
        space  = temp;
        row = "" //reset row 
        console.log("\n");//print a new line 
    }