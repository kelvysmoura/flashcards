const CardHtmlObject = new CardHtml()

const FormAddNewCardObject = new FormAddNewCard(CardHtmlObject)

const CardOverlapObject = new CardOverlap()

const overlap = document.getElementById('overlap')

const cardList = document.getElementById('cards')
cardList.addEventListener('click', event => {
    if (event.target.classList.contains('card')) {
        overlap.classList.toggle('show')
        CardOverlapObject.toggle()
        CardOverlapObject.changeMainCard(event.target)
    }
})

const newCard = document.getElementById('new-card')
newCard.addEventListener('click', event => {
    overlap.classList.toggle('show')
    FormAddNewCardObject.toggle()
    document.querySelector('input[name="text"]').focus()
})

const cleanBoard = document.getElementById('clean-board')
cleanBoard.addEventListener('click', event => {
    localStorage.removeItem('cards')
    cardList.innerHTML = '';
})

const closeOverlap = document.querySelector("#overlap .close")
closeOverlap.addEventListener('click', event => {
    overlap.classList.toggle('show')
    let overlapContents = document.querySelectorAll('.overlap-content')
    overlapContents.forEach(item => item.classList.remove('show'))
})

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && overlap.classList.contains('show')) {
        closeOverlap.click()
    }
})