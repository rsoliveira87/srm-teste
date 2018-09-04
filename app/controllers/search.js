module.exports.search = function(application, req, res) {
	// pega o que foi preenchido no campo de busca e faz uma expressão regular para desconsiderar letras maiúsculas
	var search = new RegExp( req.body.search, 'i' );
	const mockyService = require('../services/mocky');
	// instancia a classe MockyService
	let links = new mockyService();
	// chama a função getLinks que faz a requisição na API do Mocky.io e manda o resultado para a view
	links.getLinks().then(function(obj){
		let searchResult = [];
		for ( var item in obj ) {
			var links = obj[item];
			for ( var key in links ) {
				if ( links[key].meta.title.match( search ) ) {
					searchResult.push(links[key]);
				}
			}
		}
		res.render("search", {linksObj : searchResult});
	}).catch(function(error){
		console.log(error);
	});
}