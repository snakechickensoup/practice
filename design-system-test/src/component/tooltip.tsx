import { Tooltip } from 'snow-white-ui';
import { positions, tagList } from '../data';

const TooltipComponent = () => {
	return (
		<article>
			<h2>Tooltip Component</h2>
			<ul className='area'>
				{tagList.slice(0, 4).map((tag, i) => (
					<Tooltip key={tag.id} content={tag.label} position={positions[i]}>
						Hover...
					</Tooltip>
				))}
			</ul>
		</article>
	);
};

export default TooltipComponent;
