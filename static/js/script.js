const app = {
    x: 0,

    init() {
        app.x = Math.floor(Math.random() * 500) + 1;
        const button = document.getElementById('validButton');
        button.addEventListener('click', app.handleClick);
        const message = document.getElementById('message');
        message.textContent = '';
        document.getElementById('answer').value = '';
    },

    handleClick(e) {
        let answer = document.getElementById('answer').value;
        document.getElementById('answer').value = '';

        answer = Number(answer);

        const message = document.getElementById('message');
        message.textContent = '';

        if(!isNaN(answer) && Number.isInteger(answer) && answer >= 1 && answer <= 1000) {
            app.validAnswer(answer);
        } else {
            const messageP = document.createElement('p');
            messageP.textContent= ' Veuillez respectez les regles du jeu !!';
            message.appendChild(messageP);
        }
    },

    validAnswer(userAnswer) {
        const message = document.getElementById('message');
        message.textContent = '';
        const messageP = document.createElement('p');
        const buttonAgain = document.createElement('button');
        if (userAnswer < app.x) {
            messageP.textContent = 'Essaye encore, le nombre est plus grand !';
            message.appendChild(messageP);
            return false;
        } else if (userAnswer > app.x) {
            messageP.textContent = 'Essaye encore, le nombre est plus petit !'
            message.appendChild(messageP);
            return false;
        }

        messageP.textContent = `Bravo ! Tu as trouvé le bon nombre (${userAnswer}) ! 👏`;
        message.appendChild(messageP);
        buttonAgain.textContent = 'Rejouez ?!';
        buttonAgain.addEventListener('click', app.init);
        message.appendChild(buttonAgain);
        return true;
    }
};


document.addEventListener('DOMContentLoaded', app.init);