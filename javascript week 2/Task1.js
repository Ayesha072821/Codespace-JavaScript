//cretaing a user class
class user
{

    //creating a constructor
    constructor(firstName,lastName)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }



     //class method to say hello
    sayHello()
    {
        console.log('Hello',(this.firstName), (this.lastName));
       }
}



user1=new user('John','Doe');
user1.sayHello();
user2=new user('jane','doe');
user2.sayHello();
