// test(desc, callback)
// any time you have a callback, run an arrow function

const fb = require('../fizzbuzz')

// check constants

test("check fizz buzz constants", () => {
    expect(fb.FIZZ).toBe('fizz')
    expect(fb.BUZZ).toBe('buzz')
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

// isFizzy

test("isFizzy true on multiples of 3", () => {
    expect(fb.isFizzy(3)).toBeTruthy()
    expect(fb.isFizzy(9)).toBeTruthy()
    expect(fb.isFizzy(15)).toBeTruthy()
})

test("isFizzy false on non-multiples of 3", () => {
    expect(fb.isFizzy(1)).toBeFalsy()
    expect(fb.isFizzy(5)).toBeFalsy()
    expect(fb.isFizzy(7)).toBeFalsy()
})

// isBuzzy

test("isBuzzy true on multiples of 5", () => {
    expect(fb.isBuzzy(5)).toBeTruthy()
    expect(fb.isBuzzy(10)).toBeTruthy()
    expect(fb.isBuzzy(15)).toBeTruthy()
})

test("isBuzzy false on non-multiples of 5", () => {
    expect(fb.isBuzzy(3)).toBeFalsy()
    expect(fb.isBuzzy(7)).toBeFalsy()
    expect(fb.isBuzzy(12)).toBeFalsy()
})

// fizzyBuzzy

test("fizzyBuzzy returns 'fizzbuzz' on multiples of 3 AND 5", () => {
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
    expect(fb.fizzyBuzzy(30)).toBe('fizzbuzz')
    expect(fb.fizzyBuzzy(45)).toBe('fizzbuzz')
})

test("fizzyBuzzy returns only 'fizz' on multiples of 3 but not 5", () => {
    expect(fb.fizzyBuzzy(9)).toBe('fizz')
    expect(fb.fizzyBuzzy(21)).toBe('fizz')
    expect(fb.fizzyBuzzy(33)).toBe('fizz')
})

test("fizzyBuzzy returns only 'buzz' on multiples of 5 but not 3", () => {
    expect(fb.fizzyBuzzy(10)).toBe('buzz')
    expect(fb.fizzyBuzzy(20)).toBe('buzz')
    expect(fb.fizzyBuzzy(25)).toBe('buzz')
})

test("fizzyBuzzy returns False / empty string if not multiple of 5 or 3", () => {
    expect(fb.fizzyBuzzy(7)).toBeFalsy()
    expect(fb.fizzyBuzzy(11)).toBeFalsy()
    expect(fb.fizzyBuzzy(17)).toBeFalsy()
})

// fizzBuzz

test("fizzBuzz of 7", () => {
    expect(fb.fizzBuzz(7)).toEqual({
        count: 7,
        fizz: 2,
        buzz: 1,
        fizzBuzz: 0
    })
})

test("fizzBuzz of 15", () => {
    expect(fb.fizzBuzz(15)).toEqual({
        count: 15,
        fizz: 4,
        buzz: 2,
        fizzBuzz: 1
    })
})

test("fizzBuzz of 29", () => {
    expect(fb.fizzBuzz(29)).toEqual({
        count: 29,
        fizz: 8,
        buzz: 4,
        fizzBuzz: 1
    })
})

//edge cases

test("fizzBuzz of 0", () => {
    expect(fb.fizzBuzz(0)).toEqual({
        count: 0,
        fizz: 0,
        buzz: 0,
        fizzBuzz: 0
    })
})

test("fizzBuzz of -15", () => {
    expect(fb.fizzBuzz(-15)).toEqual({
        count: -15,
        fizz: 0,
        buzz: 0,
        fizzBuzz: 0
    })
})

test("fizzBuzz of 20.5", () => {
    expect(fb.fizzBuzz(20.5)).toEqual({
        count: 20.5,
        fizz: 5,
        buzz: 3,
        fizzBuzz: 1
    })
})

test("fizzBuzz of 'dog'", () => {
    expect(fb.fizzBuzz('dog')).toEqual({
        count: 'dog',
        fizz: 0,
        buzz: 0,
        fizzBuzz: 0
    })
})
