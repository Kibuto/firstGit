function Dog(name, age){
	this.name = name;
	this.age = age;
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};