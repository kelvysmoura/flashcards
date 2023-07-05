
function CardHtml() {
    
    this.create = (listFromLocalStorage) => {
        if(typeof listFromLocalStorage?.forEach === 'function') {
            listFromLocalStorage.forEach(item => {
                this.addItem(item)
            })
        }
    }

    this.addItem = (item) => {
        let li = document.createElement('li')
        li.classList.add('card')
        li.dataset.definition = item.definition;
        li.dataset.text = item.text;
        li.id = Math.random().toString(16).substring(2);
        li.innerText = item.text;
        let cards = document.querySelector('#cards');
        cards.prepend(li)
    }
    
    this.removeItems = function () {
        document.querySelector('#cards').innerHTML = '';
    }

    const cardsSaved = localStorage.getItem('cards');
    if (cardsSaved && cardsSaved.length) {
        this.create(JSON.parse(cardsSaved))
    }
}