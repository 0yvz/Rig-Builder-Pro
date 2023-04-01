export default {
	title: 'Harddrive/SSD',
	name: 'harddrive',
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
			  { title: 'SSD', value: 'SSD' },
			  { title: 'HDD', value: 'HDD' },
			],
			layout: 'radio',
			direction: 'horizontal'
		 }
	  },
	  {
		 title: 'Storage',
		 name: 'storage',
		 type: 'string',
		 options: {
			list: [
			  '250 GB',
			  '500 GB',
			  '1 TB',
			  '2 TB',
			  '4 TB',
			  '6 TB',
			  '8 TB',
			  '10 TB',
			]
		 }
	  },
	  {
		 title: 'Product Description',
		 name: 'description',
		 type: 'text'
	  },
	  {
		 title: 'Dimensions',
		 name: 'dimensions',
		 type: 'object',
		 fields: [
			{
			  title: 'Height',
			  name: 'height',
			  type: 'number'
			},
			{
			  title: 'Width',
			  name: 'width',
			  type: 'number'
			},
			{
			  title: 'Depth',
			  name: 'depth',
			  type: 'number'
			},
			{
			  title: 'Unit',
			  name: 'unit',
			  type: 'string',
			  options: {
				 list: [
					{ title: 'mm', value: 'mm' },
					{ title: 'in', value: 'in' },
					{ title: 'cm', value: 'cm' },
				 ]
			  }
			}
		 ]
	  },
	  {
		 title: 'Weight',
		 name: 'weight',
		 type: 'number'
	  },
	  {
		 title: 'Image',
		 name: 'image',
		 type: 'image'
	  }
	],
	preview: {
	  select: {
		image: 'image',
		brand: 'brand',
		model: 'model',
		type: 'type',
		 storage: 'storage',
	  },
	  prepare: build => {
		 const { brand, model, type, storage } = build;
 
		 return {
			title: `${brand} ${model} ${type} ${storage}`
		 };
	  }
	}
 }
 