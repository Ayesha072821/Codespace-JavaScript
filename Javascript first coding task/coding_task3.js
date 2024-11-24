let mostExpensivItem=data=>
{
    let mostexpensive={item:"", price:0,stock:0};
    for(let i  in data)
    {
        if((data[i].price*data[i].stock )> (mostexpensive.price*mostexpensive.stock))
        {
            mostexpensive.item=data[i].item;
            mostexpensive.price=data[i].price;
            mostexpensive.stock=data[i].stock;
        }

    }
    return mostexpensive
    

}


TestData=[
    { item: "irn bru", price: 3.25, stock: 50 },
   { item: "fanta", price: 3.98, stock: 45 },
   { item: "diet coke", price: 4.40, stock: 38 }, 
   { item: "7up", price: 3.99, stock: 42 },
]
console.log(mostExpensivItem(TestData))