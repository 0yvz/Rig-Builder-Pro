export default {
	title: 'Build',
	name: 'build',
	type: 'document',
	fields: [
	  {
		 title: 'CPU',
		 name: 'cpu',
		 type: 'reference',
		 to: [{type: 'cpu'}],
	  },
	  {
		 title: 'GPU',
		 name: 'gpu',
		 type: 'reference',
		 to: [{type: 'gpu'}]
	  },
	  {
		 title: 'Motherboard',
		 name: 'motherboard',
		 type: 'reference',
		 to: [{type: 'motherboard'}]
	  },
	  {
		 title: 'Memory',
		 name: 'memory',
		 type: 'reference',
		 to: [{type: 'memory'}],
	  }
	]
 }