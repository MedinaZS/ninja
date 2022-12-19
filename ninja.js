
class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(`Nombre: ${this.nombre} \nFuerza: ${this.fuerza} \nVelocidad: ${this.velocidad} \nSalud: ${this.salud}\n`)
    }

    drinkSake(){
        this.salud+=10;
    }
}

const ninja1 = new Ninja("Hyabusa", 5);
ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake();
ninja1.showStats();
