export default {
	title: 'Network Card',
	name: 'networkCard',
	type: 'document',
	fields: [
	  {
		 title: 'Brand',
		 name: 'brand',
		 type: 'string'
	  },
	  {
		 title: 'Model',
		 name: 'model',
		 type: 'string'
	  },
	  {
		 title: 'Connection Type',
		 name: 'connectionType',
		 type: 'string',
		 options: {
			list: [
			  {title: 'Ethernet', value: 'ethernet'},
			  {title: 'Wi-Fi', value: 'wifi'},
			  {title: 'Bluetooth', value: 'bluetooth'}
			],
			layout: 'radio',
			direction: 'horizontal'
		 }
	  },
	  {
		 title: 'Speed',
		 name: 'speed',
		 type: 'number'
	  },
	  {
		 title: 'Product Description',
		 name: 'description',
		 type: 'text'
	  },
	  {
		 title: 'Image',
		 name: 'image',
		 type: 'image'
	  }
	],
	preview: {
	  select: {
		 brand: 'brand',
		 model: 'model',
		 connectionType: 'connectionType'
	  },
	  prepare: ({brand, model, connectionType}) => ({
		 title: `${brand} ${model} - ${connectionType}`
	  })
	}
 }
 