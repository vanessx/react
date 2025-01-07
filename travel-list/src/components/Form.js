import { useState } from 'react';

export default function Form({ onAddItems }) {
	const [description, setDescription] = useState('');
	const [itemQuantity, setItemQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = {
			description,
			itemQuantity,
			packed: false,
			id: Date.now(),
		};

		onAddItems(newItem);

		setItemQuantity(1);
		setDescription('');
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select
				value={itemQuantity}
				onChange={(e) => setItemQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			></input>
			<button>Add</button>
		</form>
	);
}
