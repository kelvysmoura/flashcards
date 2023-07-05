function FormAddNewCard(CardHtml) {

    this.element = document.getElementById('form-add-card')
    this.form = this.element.querySelector('form')

    this.toggle = function () {
        this.element.classList.toggle('show')
    }
    
    this.reset = function () {
        this.form.reset()
    }

    this.dataToSave = function () {
        let dataToSave = {};
        Array.from(this.form).forEach(item => {
            if (item.value) {
                dataToSave[item.name] = item.value
            }
        })

        return dataToSave
    }

    this.form.addEventListener('submit', event => {
        event.preventDefault()

        const dataToSave = this.dataToSave()

        let storage = localStorage.getItem('cards')

        if (storage) {
            try {
                storage = JSON.parse(storage);
            } catch (e) {
                localStorage.setItem(`cards-with-error`, storage)
                storage = null;
                localStorage.removeItem('cards')
            }
        }

        if (!storage) {
            storage = []
        }

        storage.push(dataToSave)

        localStorage.setItem('cards', JSON.stringify(storage))

        CardHtml.addItem(dataToSave)

        this.form.reset()

        document.querySelector('#overlap .close').click()
        
    })
}