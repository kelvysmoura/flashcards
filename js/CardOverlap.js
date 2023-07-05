
function CardOverlap() {

    this.element = document.getElementById('card-overlap')

    this.toggle = function () {
        this.element.classList.toggle('show')
    }

    this.definition = function (query) {
        return this.element.querySelector('.definition' + (query ? ` ${query}` : ''))
    }

    this.actions = function (buttonClass) {
        return this.element.querySelector('.actions' + (buttonClass ? ` ${buttonClass}` : ''))
    }

    this.addHidden = function () {
        this.definition('p').classList.add("hidden")
    }

    this.toggleHidden = function () {
        this.definition('p').classList.toggle("hidden")
    }

    this.removeHidden = function () {
        this.definition('p').classList.remove("hidden")
    }

    this.buttonHasDisabled = function (buttonClass) {
        return this.actions(buttonClass).getAttribute('disabled')
    } 

    this.disableButton = function (buttonClass, disable = true) {
        if(disable === true) {
            this.actions(buttonClass).setAttribute('disabled', true)
            return;
        }
        this.actions(buttonClass).attributes.removeNamedItem('disabled')
    }

    this.preapreButtonOfAction = function (buttonClass, cardId) {
        if (cardId) {
            this.actions(buttonClass).dataset[buttonClass.substring(1)] = cardId
            if (this.buttonHasDisabled(buttonClass)) {
                this.disableButton(buttonClass, false)
            }
            return;
        }

        this.disableButton(buttonClass)
    }

    this.changeMainCard = function (card) {
        this.addHidden()

        this.preapreButtonOfAction('.prev', card?.previousSibling?.id);
        this.preapreButtonOfAction('.next', card?.nextSibling?.id);

        this.element.querySelector('.content .text').textContent = card.textContent
        this.definition('p').textContent = card.dataset.definition
    }

    this.definition().addEventListener('click', event => {
        this.toggleHidden()
    })

    this.actions('.next').addEventListener('click', event => {
        let nextId = event.currentTarget.dataset.next;
        let nextCard = document.getElementById(nextId);
        this.changeMainCard(nextCard)
    })

    this.actions('.prev').addEventListener('click', event => {
        let prevId = event.currentTarget.dataset.prev;
        let prevCard = document.getElementById(prevId);
        this.changeMainCard(prevCard)
    })
}