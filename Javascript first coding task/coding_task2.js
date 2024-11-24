let reverseArray=input=>
    {
        let array_length=input.length-1
        let reversedarray=[];
        let index=0;
        //to iterate for reverse string
        while(array_length>=0)
        {
            reversedarray[index]=input[array_length]
            index+=1
            array_length-=1
            
        }
        
        return (reversedarray)
        
    }
    console.log(reverseArray(["Shahwaiz","Ayzal"]))
    console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]))