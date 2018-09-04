module.exports.index = function(application, req, res) {
	const mockyService = require('../services/mocky');
	let links = new mockyService();
	links.getLinks().then(function(obj){
		res.render("index", {linksObj : obj});
	}).catch(function(error){
		console.log(error);
	});
}