class Blogpost{

	constructor(title,author,date,image,summary){
		this.title = title;
		this.author = author;
		this.date = date;
		this.image = image;
		this.summary = summary;
	}


	getTitle(){
		return this.title;
	}

	getAuthor(){
		return this.author;
	}

	getDate(){
		return this.date;
	}

	getImage(){
		return this.image;
	}

	getSummary(){
		return this.summary;
	}


}