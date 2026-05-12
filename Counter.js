// Object Literal

const square1 = {
    color: 'red',
    container: document.querySelector('.square-1'),
    render: function () {
        this.container.innerHTML = ''

        const div = document.createElement('div')
        div.style.backgroundColor = this.color
        div.style.width = '100px'
        div.style.height = '100px'

        this.container.appendChild(div)
    }
}

square1.render()

// Object constructor

const square2 = new Object()

square2.color = 'green'
square2.container = document.querySelector('.square-2')
square2.render = function () {
    this.container.innerHTML = ''

    const div = document.createElement('div')
    div.style.backgroundColor = this.color
    div.style.width = '100px'
    div.style.height = '100px'

    this.container.appendChild(div)
}

square2.render()


// Factory function

const makeSquare = function (color, container) {
    return {
        color: color,
        container: container,
        render: function () {
            this.container.innerHTML = ''

            const div = document.createElement('div')
            div.style.backgroundColor = this.color
            div.style.width = '100px'
            div.style.height = '100px'

            this.container.appendChild(div)
        }
    }
}

const square3 = makeSquare('blue', document.querySelector('.square-3'))
square3.render()