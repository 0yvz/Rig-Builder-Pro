import {sanity} from '../sanity.js';

export default async function FetchData() {
	const productsContainer = document.querySelector('.products');
	const query = `*[_type == 'product'] {
		...,
		preview {
			..., asset->
		}
	}`;
	const products = await sanity.fetch(query);
	console.log(products);
}