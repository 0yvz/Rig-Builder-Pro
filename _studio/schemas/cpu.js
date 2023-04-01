export default {
	title: 'CPU',
	name: 'cpu',
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
      description: 'The speed of the CPU in GHz.',
		options: {
			list: [
				{title: '1.0 GHz', value: '1.0'},
			  	{title: '1.2 GHz', value: '1.2'},
			  	{title: '1.4 GHz', value: '1.4'},
			  	{title: '1.6 GHz', value: '1.6'},
			  	{title: '1.8 GHz', value: '1.8'},
			  	{title: '2.0 GHz', value: '2.0'},
			  	{title: '2.2 GHz', value: '2.2'},
			  	{title: '2.4 GHz', value: '2.4'},
			  	{title: '2.6 GHz', value: '2.6'},
			  	{title: '2.8 GHz', value: '2.8'},
			  	{title: '3.0 GHz', value: '3.0'},
			  	{title: '3.2 GHz', value: '3.2'},
			  	{title: '3.4 GHz', value: '3.4'}
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
			title: 'Image',
			name: 'image',
			type: 'image'
		}
	],
	preview: {
		select: {
			brand: 'brand',
			model: 'model',
			speed: 'speed',
			memory: 'memory',
		},
		prepare: build => {
			const { brand, model, speed, memory} = build; 
			
			return {
				title: `${brand} ${model} ${speed} GHz ${memory} RAM`
			};
		}
	}
}