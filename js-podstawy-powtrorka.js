'use strict'

console.log('before alert')

var alertResult = alert('Hello alert!')

console.log('after alert', alertResult)

console.log('before confirm')

var confirmResult = confirm('Hello confirm!')

console.log('after confirm', confirmResult)

console.log('before prompt')

var promptResult = prompt(
    'Hello prompt!',
    'Placeholder'
)

console.log('after prompt', promptResult)