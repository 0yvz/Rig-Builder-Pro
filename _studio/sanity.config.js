import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import components from './structure/components.js';
import settings from './structure/settings.js';

export default {
	title: 'PC builds',

	projectId: 'cizkibmh',
	dataset: 'components',

	plugins: [
		deskTool({
			title: 'Components',
			name: 'components',
			structure: components
		}),

		deskTool({
			title: 'Settings',
			name: 'settings',
			structure: settings
		}),

		visionTool()
	],

	schema: {
		types: schemas,
	},
};
