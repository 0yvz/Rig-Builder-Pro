export default {
	title: 'Case',
	name: 'cabinet',
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
		 title: 'Case Type',
		 name: 'caseType',
		 type: 'string',
		 options: {
			list: [
			  { title: 'Full Tower', value: 'fullTower' },
			  { title: 'Mid Tower', value: 'midTower' },
			  { title: 'Mini Tower', value: 'miniTower' },
			  { title: 'Slimline', value: 'slimline' },
			  { title: 'Cube', value: 'cube' },
			  { title: 'Rackmount', value: 'rackmount' }
			],
			layout: 'radio',
			direction: 'horizontal'
		 }
	  },
	  {
		 title: 'Case Material',
		 name: 'caseMaterial',
		 type: 'string',
		 options: {
			list: [
			  { title: 'Steel', value: 'steel' },
			  { title: 'Aluminum', value: 'aluminum' },
			  { title: 'Plastic', value: 'plastic' },
			  { title: 'Glass', value: 'glass' }
			],
			layout: 'radio',
			direction: 'horizontal'
		 }
	  },
	  {
		 title: 'Color',
		 name: 'color',
		 type: 'string'
	  },
	  {
		 title: 'Expansion Slots',
		 name: 'expansionSlots',
		 type: 'number'
	  },
	  {
		 title: 'Drive Bays',
		 name: 'driveBays',
		 type: 'array',
		 of: [
			{
			  type: 'object',
			  fields: [
				 {
					title: 'Type',
					name: 'type',
					type: 'string',
					options: {
					  list: [
						 { title: '3.5"', value: '3.5' },
						 { title: '2.5"', value: '2.5' }
					  ],
					  layout: 'radio',
					  direction: 'horizontal'
					}
				 },
				 {
					title: 'Count',
					name: 'count',
					type: 'number'
				 }
			  ]
			}
		 ]
	  },
	  {
		 title: 'Front Panel Ports',
		 name: 'frontPanelPorts',
		 type: 'array',
		 of: [
			{
			  type: 'object',
			  fields: [
				 {
					title: 'Type',
					name: 'type',
					type: 'string',
					options: {
					  list: [
						 { title: 'USB', value: 'usb' },
						 { title: 'Audio', value: 'audio' },
						 { title: 'Card Reader', value: 'cardReader' },
						 { title: 'Other', value: 'other' }
					  ],
					  layout: 'radio',
					  direction: 'horizontal'
					}
				 },
				 {
					title: 'Count',
					name: 'count',
					type: 'number'
				 }
			  ]
			}
		 ]
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
		 color: 'color',
		 caseType: 'caseType'
	  }
	}
}
