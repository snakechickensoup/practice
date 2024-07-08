import { Tag } from 'snow-white-ui';
import { tagList } from '../data';
import { useState } from 'react';

type T = (typeof tagList)[number];

const Tags = () => {
	const [tags, setTags] = useState<T[]>([...tagList]);

	const handleClose = (id: T['id']) => {
		setTags((prev) => prev.filter((e) => e.id !== id));
	};

	return (
		<article>
			<h2>Tag Component</h2>
			<ul className='tag-list'>
				{tags.map((tag) => (
					<li key={tag.id} className='tag-item'>
						{/* style props 추가하기 */}
						<Tag rounded closable onClose={() => handleClose(tag.id)} size='md'>
							{tag.label}
						</Tag>
					</li>
				))}
			</ul>
		</article>
	);
};

export default Tags;
