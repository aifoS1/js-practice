
var Cat = function(options){
	this.options = options || {};
	this.name = options.name;
	this.image = options.image;
	this.id = options.id;
	this.clicks = 0;

	this.catClick(this.id);
}

Cat.prototype.catClick = function(cat) {
	  $('#' + cat  + '').on('click', 'img', function(){	
	 	  this.clicks +=1;
	 	  this.countTotal(this.id, this.clicks);
	}.bind(this))	  
},
Cat.prototype.countTotal = function(id, clicks){
	 $('#' + id + ' .count').html(clicks);
}




$(document).ready(function(){

  var cat1 = new Cat({id: "cat1"})
  var cat2 = new Cat({id: "cat2"})

});



