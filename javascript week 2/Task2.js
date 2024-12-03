//cretaing a user class
class user
{

    //creating a constructor
   constructor(){}
    //set methods
    set FirstName(name)
    {
        this.firstName=name;
    }

    set LastName(name)
    {
        this.lastName=name;
    }

   //get method to get the first name
    get FirstName()
    {
        return this.firstName
    }
    //get method to get the Last name
    get LastName()
    {
        return this.lastName;
    }

     //class method to say hello
    sayHello()
    {
        return 'Hello World';
       }
}


//creating class objects
User=new user();
User.FirstName='AYESHA';
User.LastName='YOUSAF';
console.log(User.sayHello());
console.log('My name is ',User.FirstName,' ',User.LastName);

