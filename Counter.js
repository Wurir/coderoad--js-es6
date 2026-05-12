// Object Literal

const square1 = {
    color: 'red',
    container: document.body,
    render: function(){
        this.container.innerHTML = ''
        
        const div = document.createElement('div')
        div.style.backgroundColor = this.color
        div.style.width = '100px'
        div.style.height = '100px'

        this.container.appendChild(div)
    }
}

square1.render()