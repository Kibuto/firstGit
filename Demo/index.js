var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse')


var dog = new Dog('Shiba', 2);
var tom = new Cat('Tom1');
var jerry = new Mouse('Jerry');

tom.eat(jerry);
dog.eat(tom);
console.log(dog, tom);
dog.sayHi();