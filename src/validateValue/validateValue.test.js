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
    test('Edge value low', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Edge value high', () => {
        expect(validateValue(100)).toBe(true)
    })
})
