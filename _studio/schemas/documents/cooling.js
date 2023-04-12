export default {
	title: 'Cooling',
	name: 'cooling',
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
		 title: 'Type',
		 name: 'type',
		 type: 'string',
		 options: {
			list: [
			  {title: 'Air', value: 'air'},
			  {title: 'Liquid', value: 'liquid'}
			]
		 }
	  },
	  {
		 title: 'Fan Size',
		 name: 'fanSize',
		 type: 'string'
	  },
	  {
		 title: 'Noise Level',
		 name: 'noiseLevel',
		 type: 'string'
	  },
	  {
		 title: 'Radiator Size',
		 name: 'radiatorSize',
		 type: 'string'
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
		 type: 'type',
		 fanSize: 'fanSize'
	  },
	  prepare: selection => ({
		 title: `${selection.brand} ${selection.model}`,
		 subtitle: `${selection.type} ${selection.fanSize}`
	  })
	}
 };
 