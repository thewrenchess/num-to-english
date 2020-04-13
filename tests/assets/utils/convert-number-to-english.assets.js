module.exports = [
  {
    number: '-123.321.123',
    to_throw: 'invalid number'
  },
  {
    number: '00000',
    to_throw: 'invalid number: leading zeros'
  },
  {
    number: '9999999999999999.99900',
    to_throw: 'whole number part should be less than 16 digits'
  },
  {
    number: '1',
    english: 'one'
  },
  {
    number: '15',
    english: 'fifteen'
  },
  {
    number: '123',
    english: 'one hundred twenty three'
  },
  {
    number: '1001.01',
    english: 'one thousand one point zero one'
  },
  {
    number: '1001001001.0100100',
    english: 'one billion one million one thousand one point zero one zero zero one'
  },
  {
    number: '12345678',
    english: 'twelve million three hundred forty five thousand six hundred seventy eight'
  },
  {
    number: '10000000',
    english: 'ten million'
  },
  {
    number: '100001001',
    english: 'one hundred million one thousand one'
  },
  {
    number: '999999999999999.999',
    english: 'nine hundred ninety nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine point nine nine nine'
  },
  {
    number: '-101',
    english: 'negative one hundred one'
  }
]
