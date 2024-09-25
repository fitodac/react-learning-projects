import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, afterEach, expect } from 'vitest'
import { Calculator } from '../src/Calculator'

describe('Calculator', () => {
	afterEach(cleanup)

	it('should be render', () => {
		render(<Calculator />)
	})

	it('Should render title correctly', () => {
		render(<Calculator />)
		screen.getByText('Calculator')
	})

	it('should render numbers', () => {
		render(<Calculator />)
		const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		numbers.forEach((number) => {
			screen.getByText(number)
		})
	})

	it('should render 4 rows', () => {
		render(<Calculator />)
		const rows = screen.getAllByRole('row')
		expect(rows.length).toBe(4)
	})

	it('should render operations', () => {
		render(<Calculator />)
		const operations = ['+', '-', '*', '/']
		operations.forEach((operation) => {
			screen.getByText(operation)
		})
	})

	it('should render equal sign', () => {
		render(<Calculator />)
		screen.getByText('=')
	})

	it('should render an input', () => {
		render(<Calculator />)
		screen.getByRole('textbox')
	})

	it('should update input value after clicking a number', () => {
		render(<Calculator />)

		const one = screen.getByText('1')
		const input = screen.getByRole('textbox')

		fireEvent.click(one)

		expect(input.value).toBe('1')
	})
})
