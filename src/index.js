console.group('Transpiled module')
console.log(this)
console.log(globalThis)
console.log(window)

;(() => {
    const window = {}
    console.log(window)
    console.log(this)
    console.log(globalThis)
})()

console.groupEnd('Transpiled module')