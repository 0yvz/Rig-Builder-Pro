export default {
	title: 'Sound Card',
	name: 'soundCard',
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
		 title: 'Audio Chipset',
		 name: 'audioChipset',
		 type: 'string',
	  },
	  {
		 title: 'Audio Channels',
		 name: 'audioChannels',
		 type: 'number',
		 options: {
			list: [
			  { title: '2.0', value: 2 },
			  { title: '2.1', value: 3 },
			  { title: '5.1', value: 6 },
			  { title: '7.1', value: 8 },
			],
			layout: 'radio',
			direction: 'horizontal',
		 },
	  },
	  {
		 title: 'Interface',
		 name: 'interface',
		 type: 'string',
		 options: {
			list: [
			  { title: 'PCI', value: 'PCI' },
			  { title: 'PCIe', value: 'PCIe' },
			  { title: 'USB', value: 'USB' },
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
		 audioChipset: 'audioChipset',
		 audioChannels: 'audioChannels',
	  },
	  prepare: ({ brand, model, audioChipset, audioChannels}) => {
		 const subtitle = `${audioChipset} | ${audioChannels} channels}`;
		 return {
			title: `${brand} ${model}`,
			subtitle,
		 };
	  },
	},
 };
 