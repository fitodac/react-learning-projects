import { useState } from 'react'

const rows = [
	[7, 8, 9, '+'],
	[4, 5, 6, '-'],
	[1, 2, 3, '*'],
	[0, '/', '='],
]

export const Calculator = () => {
	const [value, setValue] = useState('')

	const handleClick = (num) => {
		setValue((prevValue) => prevValue.concat(num))
	}

	return (
		<div>
			<p>Calculator</p>

			<input value={value} readOnly />

			{rows.map((row, idx) => (
				<div key={`row-${idx}`} role="row">
					{row.map((n) => (
						<button key={n} onClick={() => handleClick(n)}>
							{n}
						</button>
					))}
				</div>
			))}
		</div>
	)
}
