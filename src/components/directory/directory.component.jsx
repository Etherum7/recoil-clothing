import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import {useRecoilValue} from 'recoil';
import {directorySectionsState} from '../../recoil/directory/directory.atom'

function Directory() {

	const  sections  = useRecoilValue(directorySectionsState);
	return (
		<div className="directoryMenu">
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
}

export default Directory;
