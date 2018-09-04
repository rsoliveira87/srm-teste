'use strict';

// pacote responsável por fazer a requisição na API
const clients = require('restify-clients');

const client = clients.createStringClient({
	url: 'https://www.mocky.io',
	rejectUnauthorized: false
});

class MockyService {

	constructor() {}

	getLinks() {
		let promise = new Promise(
			function (resolve, reject) {
				// faz a requisição na API
				client.get('/v2/5a6bc16631000078341b8b77', function(err, req, res, obj){
					obj = JSON.parse(obj);

					// ordena o objeto pela quantidade de votos
					obj.links.sort(function(a, b){
						return b.upvotes - a.upvotes;
					});

					try {
						resolve(obj);
					} catch (err) {
						reject(err);
					}
				});
			}
		);

		return promise;
	}

}

module.exports = MockyService;