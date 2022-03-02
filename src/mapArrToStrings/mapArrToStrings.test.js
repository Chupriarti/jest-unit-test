const validateValue = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
    test('Correct value', () => {
        expect(validateValue([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Bad values', () => {
        expect(validateValue([1, 2, 3, null, undefined, 'assfasd'])).toEqual(['1', '2', '3'])
    })
    test('Empty array', () => {
        expect(validateValue([])).toEqual([])
    })
    test('Not equal value', () => {
        expect(validateValue([1, 2, 3])).not.toEqual([1, 2, 3, 4])
    })
})
