const { expect, assert } = require('chai')
const { convert_number_to_english } = require('../../utils/convert-number-to-english')
const test_assets = require('../assets/utils/convert-number-to-english.assets')

describe('util function convert_number_to_english', () => {
  test_assets.forEach((asset, index) => {
    it(`#${index}`, () => {
      const number = asset.number
      const english = asset.english
      const to_throw = asset.to_throw
  
      try {
        const result = convert_number_to_english(number)
        expect(result).to.equal(english)
      } catch (err) {
        if (to_throw) {
          expect(err.message).to.equal(to_throw)
        } else {
          assert.fail(err)
        }
      }
    })
  })
})
