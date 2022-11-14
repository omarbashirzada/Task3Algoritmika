let input = document.querySelector('input');
let send_btn = document.querySelector('.send');
let show_btn = document.querySelector('.show');
let ul = document.querySelector('ul')


class Message {
    constructor(autName, textMessage) {
        this.autName = autName;
        this.textMessage = textMessage;
    }

    gettime() {
        let nowDate = new Date();
        return `${nowDate.getHours()}:${nowDate.getMinutes()}`

    }

    toString() {
        return `[${this.gettime()} - ${this.autName}]:\n${this.textMessage}`
    }

    toHtml() {
        let messs = document.createElement('li');
        messs.textContent = `[${this.gettime()}-${this.autName}]:\n${this.textMessage}`
        ul.append(messs)
    }
}

class Messenger {
    list = []

    send(name, message) {
        let text = new Message(name, message);
        this.list.push(text)


    }

    show_history() {
        this.list.forEach(item => {
            return item.toHtml()
        })

    }


}

send_btn.addEventListener('click', () => {
    let words = input.value.split('/')
    let messenger = new Messenger()
    console.log(words)
    messenger.send(words[0], words[1]);
    messenger.show_history()
})








