import { Button } from 'snow-white-ui';
import { tagList } from '../data';

const ButtonComponent = () => {
	return (
		<article>
			<h2>Button Component</h2>
			<ul className='area'>
				{tagList.slice(0, 3).map((tag) => (
					<Button key={tag.id} onClick={() => alert(tag.label)}>
						{tag.label}
					</Button>
				))}
			</ul>
		</article>
	);
};

export default ButtonComponent;
