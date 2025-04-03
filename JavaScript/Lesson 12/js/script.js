// Основанный на истории о походе героев в поисках сокровища.
// Давайте представим, что у нас есть классы Hero (герой) и Treasure (сокровище), и мы хотим создать
// экземпляры этих классов и взаимодействовать с ними.

// В этом уроке мы создаем двух героев (hero1 и hero2) и сокровище (treasure). Герои могут атаковать
// друг друга и исцелять себя, а также находить и собирать сокровище. Вся эта функциональность реализована
// с помощью методов классов Hero и Treasure

class Treasure {
  constructor(value){
    this.value = value;
  }

  collect(hero){
    return `${hero.name} находит сокровище стоимостью ${this.value} золотых монет!`;
  }
}

let treasure = new Treasure(500)

class Hero {
  constructor(name, health){
    this.name = name;
    this.health = health;
    this.healthCount = 0;
  }

  attack(target){
    console.log(`${this.name} атакует ${target.name}`);

    target.health -= parseInt(Math.random()*15);

    if(target.health <= 0){
      alert(`${target.name} проиграл!`);

      alert(treasure.collect(this));

      return;
    }

    console.log(`${target.name} получает урон. Здоровье: ${target.health}`);
  }

  heal(){

    if(this.healthCount >= 3 ){
      console.log("Нет возможности исцелять себя!")
      return;
    }

    this.healthCount++;

    console.log(`${this.name} исцеляет себя!`);

    this.health += parseInt(Math.random()*10);

    if(this.health > 100){
      this.health = 100;
    }

    console.log(`${this.name} исцелен. Здоровье: ${this.health}`);
  }
}


let hero1 = new Hero("Герой 1", 100); // {name: "Герой 1", health: 100}
let hero2 = new Hero("Герой 2", 100); // {name: "Герой 2", health: 80}

document.body.addEventListener("keypress", function(e){
  let key = e.key.toLowerCase();

  if(key === "a"){
    hero1.attack(hero2);
  }else if(key === "s"){
    hero1.heal();
  }else if(key === "k") {
    hero2.attack(hero1);
  }else if(key === "l")  {
    hero2.heal();
  }
})