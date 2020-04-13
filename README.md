# Num to English
a server API endpoint that converts any number given to it into the english words that describe that number.

## Usage
`GET` `{BASE_URL}/num_to_english?number={number}`

## Number Requirements
- Accepted formats `-123`, `123`, `123.321`, `-123.321`
- No characters other than `-` `.` `[0-9]`
- No leading zeros
- Trialing zeros in decimals will be ignored

## Number Limitations
- Conversions can effectively be dealt with up to trillions (15 digits max on the left side of decimal point)
