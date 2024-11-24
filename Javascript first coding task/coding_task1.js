let reversestring=input=>
{
    let stringlength=input.length-1
    let reversed="";
    let i=0;
    //to iterate for reverse string
    while(stringlength>=0)
    {
        reversed=reversed+(input[stringlength])
        
        stringlength-=1
        
    }
    
    return (reversed)
    
}
console.log(reversestring("Shahwaiz"))
console.log(reversestring("Ayzal"))