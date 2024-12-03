//in abstract class constructor is protected so it cannot be called directly



class User{
    constructor()
    {
        //check if the constructor is called and error returned
        if(this.constructor===User)
        {
            throw new TypeError("Cnnot construct Abstract instances directly");
            
        }
        this.username="";
    }
    set name(uname)
    {
        this.username=uname;
    }
    get name()
    {
        return this.username;
    }

    stateyourrole()
    {
        throw new TypeError("don not call this method deposit from child");
    }

}

class Admin extends User{

    constructor(name)
    {
        super(name);
        

    }
    stateyourrole()
    {
        return "Admin";
    }
}


class Viewer extends User{

    constructor(name)
    {
        super(name);
        

    }

    stateyourrole()
    {
        return "Viewer";
    }

}

admin=new Admin();
admin.username="Balthazar";
console.log(admin.stateyourrole());

viewer = new Viewer();
viewer.username="Melchoir";
console.log(viewer.stateyourrole());