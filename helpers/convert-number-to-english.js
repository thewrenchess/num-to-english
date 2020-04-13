const NUMBER_REGEX = /^\-?(\d+)(\.\d+)?$/
const UNITS = ['', 'thousand', 'million', 'billion', 'trillion']
const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'nine']
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

  let decimal = match[2]
  if (decimal) {
    decimal = decimal.slice(1).replace(/0+$/, '')
  }

  if (whole_number === '0' && !decimal) {
    return 'zero'
  }

  const num_in_english = `${is_negative ? '-' : ''}${whole_number}${decimal ? '.' + decimal : ''}`
  return num_in_english
}

// 
function convert_per_unit_number_to_english (number) {

}

module.exports = {
  convert_number_to_english
}
