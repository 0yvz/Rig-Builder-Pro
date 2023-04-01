import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';

export default {
	title: 'PC builds',

	projectId: 'cizkibmh',
	dataset: 'components',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemas,
	},
};
