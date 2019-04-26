function Dog(name, age){
	this.name = name;
	this.age = age;
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};

Dog.prototype.sayHi = function() {
	console.log('Hi! I am dog, my name is ' + this.name);
};

module.exports = Dog;