function Cat(name){
	this.name = name;
	this.stomach = []
	this.isDead = false;
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};

Cat.prototype.die = function() {
	// body...
	this.isDead = true;
};

module.exports = Cat;