import {sanity} from '../sanity.js';

export default async function FetchData() {
	const productsContainer = document.querySelector('.products');
	const query = `*[_type == 'cpu'] {
		_id,
		name,
		image {
		  asset->{
			 _id,
			 url
		  }
		}
	 }`;
	const products = await sanity.fetch(query);
	console.log(products);
}