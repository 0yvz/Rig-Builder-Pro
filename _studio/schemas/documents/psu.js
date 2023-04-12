export default {
	title: 'Power Supply Unit',
	name: 'psu',
	type: 'document',
	fields: [
	  {
		 title: 'Brand',
		 name: 'brand',
		 type: 'string',
	  },
	  {
		 title: 'Model',
		 name: 'model',
		 type: 'string',
	  },
	  {
		 title: 'Form Factor',
		 name: 'formFactor',
		 type: 'string',
		 options: {
			list: [
			  { title: 'ATX', value: 'ATX' },
			  { title: 'SFX', value: 'SFX' },
			  { title: 'TFX', value: 'TFX' },
			  { title: 'Flex ATX', value: 'Flex ATX' },
			],
			layout: 'radio',
			direction: 'horizontal',
		 },
	  },
	  {
		 title: 'Wattage',
		 name: 'wattage',
		 type: 'number',
		 validation: (Rule) => Rule.min(0),
	  },
	  {
		 title: 'Modular',
		 name: 'modular',
		 type: 'boolean',
	  },
	  {
		 title: 'Efficiency',
		 name: 'efficiency',
		 type: 'string',
		 options: {
			list: [
			  { title: '80+ Bronze', value: '80+ Bronze' },
			  { title: '80+ Silver', value: '80+ Silver' },
			  { title: '80+ Gold', value: '80+ Gold' },
			  { title: '80+ Platinum', value: '80+ Platinum' },
			],
			layout: 'radio',
			direction: 'horizontal',
		 },
	  },
	  {
		 title: 'Product Description',
		 name: 'description',
		 type: 'text',
	  },
	  {
		 title: 'Image',
		 name: 'image',
		 type: 'image',
	  },
	],
	preview: {
	  select: {
		 brand: 'brand',
		 model: 'model',
		 wattage: 'wattage',
		 formFactor: 'formFactor',
	  },
	  prepare: ({ brand, model, wattage, formFactor }) => ({
		 title: `${brand} ${model} - ${wattage}W - ${formFactor}`,
	  }),
	},
 };
 