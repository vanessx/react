import { useState } from 'react';

export default function App() {
	const [place, setPlace] = useState('');

	return (
		<div className="container">
			<Search place={place} setPlace={setPlace} />
			<div className="box-container">
				<div className="box">{place}</div>
				<div className="box">{place}</div>
				<div className="box">{place}</div>
			</div>
		</div>
	);
}

function Search({ place, setPlace }) {
	return (
		<input
			type="text"
			className="search"
			value={place}
			onChange={(e) => setPlace(e.target.value)}
			placeholder="Search..."
		></input>
	);
}
