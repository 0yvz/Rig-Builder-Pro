export default Structure => {
	const { divider, editor, list, listItem, documentTypeList, documentTypeListItem } = Structure

	return list()
				.title('Computer Components')
				.showIcons(false)
				.items([
					documentTypeListItem('cabinet'),
					documentTypeListItem('motherboard'),
					documentTypeListItem('cpu'),
					documentTypeListItem('gpu'),
					documentTypeListItem('memory'),
					documentTypeListItem('harddrive'),
					documentTypeListItem('cooling'),
					documentTypeListItem('network'),
					documentTypeListItem('psu'),


					divider(),

					documentTypeListItem('build')
				])
}