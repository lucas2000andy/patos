class Duck{

    flyBehavior;
    quackBehavior;
  
 /*  quack(){
console.log("quack");
  } */
  performQuack(){
this.quackBehavior.quack();
  }
  setFlyBehavior(flyBehavior){
    this.flyBehavior=flyBehavior;
  }
  setQuackBehavior(quackBehavior){
    this.quackBehavior=quackBehavior;
  }
  swim(){
    console.log("Estoy nadando");
  }
  display(){
    
  }
  /* fly(){
    console.log("Vuelo alto...");
  } */
  performFly(){
    this.flyBehavior.fly();
  }

}

class MallarDuck extends Duck{
  /*  quack(){
console.log("quack");
  } */
 display(){
   console.log("mírame pato mallar");
 }
  /* fly(){
    console.log("Vuelo alto...");
  } */

}

class RedHeadDuck extends Duck{
  /*  quack(){
console.log("quack");
  } */
  display(){
    console.log("mírame pato rojo");
  }
   /* fly(){
    console.log("Vuelo alto...");
  } */
}
class CauchoDuck extends Duck{
  display(){
    console.log("pato de caucho solo sabe nadar");
  }
  /* fly(){
    console.log("No puedo volar");
  } */
}
class CorchoDuck extends Duck{
  display(){
    console.log("pato de corcho solo sabe nadar");
  }
  /* fly(){
    console.log("el pato de corcho no vuela...");
  } */
}

//Interfaz de FlyBehavior
class FlyWithWings{
  fly(){
    console.log("Vuelo alto...");
  }
}
class FlyNoWay{
  fly(){
    console.log("No vuelo");
  }
}
//Interfaz de QuackBehavior
class Quack{
  quack(){
    console.log("Hago quack quack");
  }
}
class Squeak{
  quack(){
    console.log("Hago squeak squeak");
  }
}
class MuteQuack{
  quack(){
    console.log("No hago quack ni squeak. soy calladito");
  }
}
class VolarConCohetes{
  fly(){
    console.log("Con mi cohetes yo voy al infinito y mas allá");
  }
}