const validateValue = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
    test('Correct value', () => {
        expect(validateValue([1, 2, 3])).toEqual(['1', '2', '3'])
    })
})
