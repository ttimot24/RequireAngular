'use strict';
/*

//Only work with Babel
class Card extends Model{

	constructor(title,image,description){
		super();
		this.title = title;
		this.image = image;
		this.description = description;

	}



}*/




var Card = function (title,image,description) {

	this.title = title;
	this.image = image;
	this.description = description;

};

/*-------------
----Getters----
--------------*/

Card.prototype.getTitle = function () {
	return this.title;
};

Card.prototype.getImage = function () {
	return this.image;
};

Card.prototype.getDescription = function () {
	return this.description;
};


/*-------------
----Setters----
--------------*/

Card.prototype.setTitle = function (title) {
	this.title = title;
};

Card.prototype.setImage = function (image) {
	this.image = image;
};

Card.prototype.setDescription = function (description) {
	this.description = description;
};


/*-------------
----toString---
--------------*/

Card.prototype.toString = function(){
	return "{title="+this.title+",image="+this.image+",description="+this.description+"}";
}