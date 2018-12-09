/* global test expect describe */
const {
  sum,
  sumFromOne,
  isEvenNumber,
  evenNumbers,
  oddOneOut,
  reverseString,
  maxCharacter,
  fibonacci
} = require('../algorithms')

describe('Sum', () => {
  test('sum(1, 2) to return 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  test('sum(4, 5) to return 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
})

describe('Sum from One', () => {
  test('sumFromOne(10) to return 55', () => {
    expect(sumFromOne(10)).toBe(55)
  })
  test('sumFromOne(25) to return 325', () => {
    expect(sumFromOne(25)).toBe(325)
  })
})

describe('Is Even Number', () => {
  test('isEvenNumber(2) to return true', () => {
    expect(isEvenNumber(2)).toBe(true)
  })
  test('isEvenNumber(8) to return true', () => {
    expect(isEvenNumber(8)).toBe(true)
  })
  test('isEvenNumber(7) to return false', () => {
    expect(isEvenNumber(7)).toBe(false)
  })
})

describe('Even Numbers', () => {
  test('evenNumber(4) to return [2, 4]', () => {
    expect(evenNumbers(4)).toEqual([2, 4])
  })
  test('evenNumber(11) to return [2, 4, 6, 8, 10]', () => {
    expect(evenNumbers(11)).toEqual([2, 4, 6, 8, 10])
  })
})

describe('Odd One Out', () => {
  test('oddOneOut([2, 2, 4, 6, 6]) to return 4', () => {
    expect(oddOneOut([2, 2, 4, 6, 6])).toBe(4)
  })
  test('oddOneOut([1, 5, 9, 21, 1, 5, 21]) to return 9', () => {
    expect(oddOneOut([1, 5, 9, 21, 1, 5, 21])).toBe(9)
  })
})

describe('Reverse String', () => {
  test('reverseString(\'Happy\') to return \'yppaH\'', () => {
    expect(reverseString('Happy')).toBe('yppaH')
  })
  test('reverseString(\'Hello World!\') to return \'!dlroW olleH\'', () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH')
  })
})

describe('Max Character', () => {
  test('maxCharacter(\'hello world!\') to return \'l\'', () => {
    expect(maxCharacter('hello world')).toBe('l')
  })
  test('maxCharacter(\'this is coding"\') to return \'i\'', () => {
    expect(maxCharacter('this is coding')).toBe('i')
  })
})

describe('Fibonacci', () => {
  test('fibonacci(6) to return 8', () => {
    expect(fibonacci(6)).toBe(8)
  })
  test('fibonacci(10) to return 55', () => {
    expect(fibonacci(10)).toBe(55)
  })
  test('fibonacci(100) to return 354224848179262000000', () => {
    expect(fibonacci(100)).toBe(354224848179262000000)
  })
})
