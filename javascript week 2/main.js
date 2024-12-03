//object oriented programing
//classes objects constructor
class Car{
    
    
    constructor(make,model){
        this._modelmodel=model;
        this._make=make;

    }
    set make(make)
    {
        this._make=make;
    }
    set model(model)
    {
        this._model=model
    }
    get make()
    {
        return this._make;
    }
    get model()
    {
        return this._model;
    }

}
firstcar=new Car(1990,"honda");
console.log(firstcar.model());