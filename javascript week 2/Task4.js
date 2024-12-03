class User{
    constructor()
    {
        this.numberOfArticles=0;
    }

    set setNumberOfArticles(number)
    {
        this.numberOfArticles=number;
    }
    get getNumberOfArticles()
    {
        return this.numberOfArticles;
    }

    calcScores()
    {
        throw new Error("Method must be implemented in the subclass");

    }
}

class Author extends User{
    constructor()
    {
        super();
    }

    calcScores()
    {
        return this.numberOfArticles*10+20
    }

}


class Editor extends User{
    constructor()
    {
        super();
    }
    //overriding the parent class method
    calcScores()
    {
        return this.numberOfArticles*6+15
    }
}

author=new Author();
author.numberOfArticles=8;
console.log("Authos's scores ",author.calcScores());
editor=new Editor();
editor.numberOfArticles=15;
console.log("Editor's scores ",editor.calcScores());