import { useState } from 'react';
import { Switch } from 'snow-white-ui';

const SwitchComponent = () => {
	const [checked, setchecked] = useState(false);

	const handleCheck = () => setchecked((prev) => !prev);
	return (
		<article>
			<h2>Switch Component</h2>
			<div className='area'>
				<Switch size='sm' checked={checked} onChange={handleCheck} />
				<Switch size='md' checked={checked} onChange={handleCheck} />
				<Switch size='lg' checked={checked} onChange={handleCheck} />
			</div>
		</article>
	);
};

export default SwitchComponent;
