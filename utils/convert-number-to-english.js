const NUMBER_REGEX = /^\-?(\d+)(\.\d+)?$/
const UNITS = ['', 'thousand', 'million', 'billion', 'trillion']
const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const TEENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const TIES = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const DECIMALS = ONES.map(number => {
  if (!number) {
    return 'zero'
  }
  return number
})

function convert_number_to_english (number) {
  if (!/^\-?\d+(\.\d+)?$/.test(number)) {
    throw new Error('invalid number')
  }

  const match = number.match(NUMBER_REGEX)
  const is_negative = (number[0] === '-')

  const whole_number = match[1]
  if (whole_number.length > 1 && whole_number[0] === '0') {
    throw new Error('invalid number: leading zeros')
  }
  if (whole_number.length > 15) {
    throw new Error('whole number part should be less than 16 digits')
  }

  let decimal = match[2]
  if (decimal) {
    decimal = decimal.slice(1).replace(/0+$/, '')
  }

  if (whole_number === '0' && !decimal) {
    return 'zero'
  }

  const whole_number_eng = convert_whole_number_to_english(whole_number)
  const decimal_eng = convert_decimal_number_to_english(decimal)

  const num_in_english = `${is_negative ? 'negative ' : ''}${whole_number_eng}${decimal_eng ? ' point ' + decimal_eng : ''}`
  return num_in_english
}

function convert_whole_number_to_english (number_str) {
  if (number_str === '0') {
    return 'zero'
  }

  let whole_number_eng = ''
  let unit_index = 0

  while (number_str) {
    const unit = UNITS[unit_index]
    const number_part = number_str.slice(-3)
    const number_part_eng = convert_per_unit_number_to_english(number_part)
    if (number_part_eng) {
      whole_number_eng = `${number_part_eng}${unit ? ' ' + unit : ''}${whole_number_eng ? ' ' + whole_number_eng : ''}`
    }
    number_str = number_str.slice(0, -3)
    unit_index++
  }

  return whole_number_eng
}

function convert_decimal_number_to_english (number_str) {
  if (!number_str) {
    return ''
  }

  return number_str
    .split('')
    .map((char) => DECIMALS[char])
    .join(' ')
}

function convert_per_unit_number_to_english (number_str) {
  let number = parseInt(number_str)
  if (!number) {
    return ''
  }

  let hundred_eng = ''
  let one_eng = ''

  const hundred_digit = Math.floor(number / 100)
  if (hundred_digit) {
    hundred_eng = `${ONES[hundred_digit]} hundred`
  }

  number = number % 100
  if (number > 0) {
    if (number < 10) {
      one_eng = ONES[number]
    } else if (number >= 10 && number < 20) {
      const one_digit = number % 10
      one_eng = TEENS[one_digit]
    } else {
      const ten_digit = Math.floor(number / 10)
      const one_digit = number % 10
      one_eng = `${TIES[ten_digit]}${one_digit ? ' ' + ONES[one_digit] : ''}`
    }
  }

  let space = ''
  if (hundred_eng && one_eng) {
    space = ' '
  }

  return `${hundred_eng}${space}${one_eng}`
}

module.exports = {
  convert_number_to_english
}
