
//Vanilla JS loop 
//Activity 1

let number=0  //initialize a variable
for(number;number<15;number++) //for loop to iterate
{
    if(number%2==0) //checking if modulus is 0
    {
        console.log(number+" is even ")
    }
    else{
        console.log(number+" is odd")
    }
    
}

//Vanilla JS LOOp
//Activity 2



//Vnila JS ARRAYS
//ACTIVITY 1
//Program to calculate sum of all numbers in array
let samplearray=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for(let i=0;i<10;i++)
{
    sum=sum+samplearray[i];
}
console.log((sum));



//Activity 2
//program to calculate average of all numbers in an array
let newarray=[20,30,25,35,-16,60,-100]; //initializing an array
let newsum=0;
let avg=0;
for(let i=0;i<newarray.length;i++) //for loop to iterate through the array
{
    newsum=newsum+newarray[i]; //adding all numbers together
}
avg=newsum/newarray.length;  // dividing the sum of all numbers with total number to get average
console.log(avg);


//Activity 3 
//finding the maximum and minimum number in an array;
let testArray=[25,14,56,15,36,56,77,18,29,49];
let maximum=testArray[0];// set the first number as maximum
let minimum=testArray[0];//set the first number as largest
for(let i=1;i<testArray.length;i++)
{
    if(testArray[i]>maximum)
    {
        maximum=testArray[i]
    }
    else if(testArray[i]<minimum){
        minimum=testArray[i]
    }
}

console.log("Maximum value for the above array = "+maximum);
console.log("Minimun value for the above array = "+minimum);

