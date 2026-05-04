const makeButtons = function () {
    const button1 = document.createElement('button')

    button1.innerText = 'Regular fn'

    const button1ClickHandler = function () {
        console.log(this) // this wskazuje na miejsce wywolania funkcji, czyli: <button1>
    }

    button1.addEventListener('click', button1ClickHandler)

    document.body.appendChild(button1)

    // Bind

    const button2 = document.createElement('button')

    button2.innerText = 'Regular fn bound'

    const button2ClickHandler = function () {
        console.log(this)
    }

    const button2ClickHandlerBound = button2ClickHandler.bind(this) // zwracam funkcje z zapisanym kontekstem this na window

    button2.addEventListener('click', button2ClickHandlerBound)

    document.body.appendChild(button2)

    // przyklad - Bind 'liniowo'

    const button3 = document.createElement('button')

    button3.innerText = 'Regular fn bound inline'

    button3.addEventListener('click', function () {
        console.log(this)
    }.bind(this)) // to samo co z btn2 ale bardziej "liniowo"

    document.body.appendChild(button3)

    // arrow fn

    const button4 = document.createElement('button')

    button4.innerText = 'Arrow fn'

    const button4ClickHandler = () => console.log(this) // funkcja strzalkowa zapamietuje kontekst dla this z miejsca deklaracji, 
    // w tym przykladzie bedzie to globalny scope (window)

    button4.addEventListener('click', button4ClickHandler)

    document.body.appendChild(button4)
}