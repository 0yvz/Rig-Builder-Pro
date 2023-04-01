export default {
	title: 'RAM',
	name: 'ram',
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
      title: 'Speed',
      name: 'speed',
      type: 'string',
      description: 'The speed of the memory in GHz.',
		options: {
			list: [
				{title: '2000 MHz', value: '2000'},
			  	{title: '2400 MHz', value: '2400'},
			  	{title: '3000 MHz', value: '3000'},
			  	{title: '3400 MHz', value: '3400'}
				]
			}
    	},
		{
			title: 'Memory',
			name: 'memory',
			type: 'string',
			options: {
				list: [
					'1 GB',
					'2 GB',
					'4 GB',
					'6 GB',
					'8 GB'
				]
			}
		},
		{
			title: 'Dual',
			name: 'dual',
			type: 'string',
			options: {
				list: [
					'Yes',
					'No'
				]
			}
		}
	]
}