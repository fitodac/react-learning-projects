import { describe, it, expect } from 'vitest'

/**
 * Fizzbuzz es una función que al pasarle un número:
 * - Devuelve 'fizz' si es múltiplo de 3
 * - Devuelve 'buzz' si es múltiplo de 5
 * - Devuelve 'fizzbuzz' si es múltiplo de 3 y 5
 * - Devuelve el número si no es divisible por 3 ni por 5
 */

const fizzbuzz = (number) => {
	if (number % 3 === 0 && number % 5 === 0) {
		return 'fizzbuzz'
	} else if (number % 3 === 0) {
		return 'fizz'
	} else if (number % 5 === 0) {
		return 'buzz'
	} else {
		return number
	}
}

describe('fizzbuzz', (): void => {
	it('should be a function', (): void => {
		expect(typeof fizzbuzz).toBe('function')
	})

	it('should return "fizz" if number is divisible by 3', (): void => {
		expect(fizzbuzz(3)).toBe('fizz')
		expect(fizzbuzz(6)).toBe('fizz')
	})

	it('should return "buzz" if number is divisible by 5', (): void => {
		expect(fizzbuzz(5)).toBe('buzz')
		expect(fizzbuzz(10)).toBe('buzz')
	})

	it('should return "fizzbuzz" if number is divisible by 3 and 5', (): void => {
		expect(fizzbuzz(15)).toBe('fizzbuzz')
		expect(fizzbuzz(30)).toBe('fizzbuzz')
	})

	it('should return number if number is not divisible by 3 or 5', (): void => {
		expect(fizzbuzz(2)).toBe(2)
		expect(fizzbuzz(7)).toBe(7)
	})

	
})
