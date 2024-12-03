class User
{
    constructor(username)
    {
        //initializing variable
        this._username="";
    }

    set username(name)
    {
        this._username=name;
    }
}

class Admin extends User{
    //class crunstructor
    constructor()
    {
        //calling super class constructor
        super();
    }
    expressYourRole()
    {
        return "Admin";
    }
    sayHello()
    {
        return "Hello Admin "+this._username;
    }
}

admin=new Admin()
admin.username="Balthazar";
console.log(admin.sayHello());