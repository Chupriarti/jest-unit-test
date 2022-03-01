const validateValue = require('./validateValue')

test('Validate value', () => {
    expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Large value', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('Less value', () => {
        expect(validateValue(101)).toBe(false)
    })
})
