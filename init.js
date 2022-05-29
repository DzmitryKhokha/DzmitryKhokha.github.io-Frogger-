//main-page init
function initMainPage() {
    let wrapper = document.getElementById('wrapper');
    console.log(wrapper);
    wrapper.className = 'wrapper';
    wrapper.appendChild(initMainMenu());
    wrapper.appendChild(initLogoContainer());
    return wrapper;
}

function initMainMenu() {
    let mainMenu = document.createElement('div');
    mainMenu.className = 'main-menu';
    mainMenu.appendChild(initMenuButtons('New Game', 'btn', SwitchToNewGamePage));
    mainMenu.appendChild(initMenuButtons('Rules', 'btn', SwitchToRulesPage));
    mainMenu.appendChild(initMenuButtons('Records', 'btn', SwitchToRecordsPage));
    mainMenu.appendChild(initMenuButtons('About Game', 'btn', SwitchToAboutPage));
    return mainMenu;
}

function initMenuButtons(text, className, hashChange) {
    let button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    button.onclick = hashChange;
    return button;
}

function initLogoContainer() {
    let container = document.createElement('div');
    container.className = 'container';
    container.appendChild(initLogo());
    return container;
}

function initLogo() {
    let logo = document.createElement('div');
    logo.className = 'logo';
    logo.appendChild(initLogoImg());
    return logo;
}

function initLogoImg() {
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    img.className = 'frog';
    img.src = '../img/green-frog.png';
    img.alt = 'frogger';
    figure.appendChild(img);
    return figure;
}

//rules-page init
function initRulesPage() {
    let wrapper = document.getElementById('wrapper');
    wrapper.className = 'wrapper';
    wrapper.appendChild(initRulesLogo());
    wrapper.appendChild(initRules());
    wrapper.appendChild(initButton(SwitchToMainPage));
    return wrapper;
}

function initRulesLogo() {
    let rulesLogo = document.createElement('div');
    rulesLogo.className = 'rules-logo';
    let img = document.createElement('img');
    img.src = '../img/little-frog.png';
    img.alt = 'little-frog';
    rulesLogo.appendChild(img);
    return rulesLogo;
}

function initRules() {
    let rules = document.createElement('div');
    rules.className = 'rules';
    let rulesHeading = document.createElement('div');
    rulesHeading.className = 'rules-heading';
    let h1 = document.createElement('h1');
    h1.textContent = 'Rules';
    rulesHeading.appendChild(h1);
    let rulesInfo = document.createElement('div');
    rulesInfo.className = 'rules-info';
    let p = document.createElement('p');
    p.textContent = 'Лягушка должна добраться до другого берега реки. Пользователь управляет лягушкой с помощью ' +
        'стрелок на клавиатуре (или с помощью touch - для устройств с поддержкой touch). На старте игры лягушка ' +
        'находится в безопасной зоне по которой она может передвигаться влево и вправо по полю. На пути лягушки ' +
        ' будет дорога, по которой едут машины с разной скоростью. Дальше, после дороги река. Река постоянно' +
        'движется(течёт). По реке плывут брёвна и черепахи на которые лягушка может запрыгнуть, чтобы перебраться на ' +
        'другой берег. Прыгнул мимо - проиграл. Не успел - проиграл, сбила машина - проиграл. При столкновении или ' +
        'прыжке мимо бревна(черепахи) будут подсчитываться неудачные попытки. При каждой неудачной попытке игрок ' +
        'начинает заново. Добрался до другого берега реки - выиграл(получил очко, лягушка появляется в начальной ' +
        'позиции и скорость игры увеличивается). Среди игроков будет рейтинг.';
    rulesInfo.appendChild(p);
    rules.appendChild(rulesHeading);
    rules.appendChild(rulesInfo);
    return rules;
}

function initButton(hashchange) {
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons';
    let button = document.createElement('button');
    button.className = 'btn';
    button.textContent = 'Main Page';
    button.onclick = hashchange;
    buttonDiv.appendChild(button);
    return buttonDiv;
}

//records-page init
function initRecordsPage() {
    let wrapper = document.getElementById('wrapper');
    wrapper.className = 'wrapper';
    wrapper.appendChild(initRulesLogo());
    wrapper.appendChild(createContainer());
    initRecords();
    wrapper.appendChild(initButton(SwitchToMainPage));
    wrapper.appendChild(initMenuButtons('New Game', 'btn', SwitchToNewGamePage));
    return wrapper;
}

function createContainer() {
    let container = document.createElement('div');
    container.className = 'cont';
    container.appendChild(createUserField('user-name', 'Name', 'Mark', 'user-name'));
    container.appendChild(createUserField('user-score', 'Score', 22, 'user-score'));
    return container;
}

function createUserField(className, text, info, id) {
    let div = document.createElement('div');
    div.className = className;
    div.id = id;
    let heading = document.createElement('h2');
    heading.textContent = text;
    let field = document.createElement('div');
    field.innerHTML = info;
    div.appendChild(heading);
    div.appendChild(field);
    return div;
}

function initRecords() {
    let users = JSON.parse(localStorage.getItem('Users'));
    console.log(users);
    //деструктуризация
    let [name, score] = users;
    console.log(name);
    console.log(score);
    users.forEach(user => {
        let userName = document.getElementById('user-name');
        let nameField = document.createElement('div');
        nameField.innerHTML = user.name;
        userName.appendChild(nameField);
        let userScore = document.getElementById('user-score');
        let scoreField = document.createElement('div');
        scoreField.innerHTML = user.score;
        userScore.appendChild(scoreField);
    });
}

//about-game-page init
function initAboutGamePage() {
    let wrapper = document.getElementById('wrapper');
    wrapper.className = 'wrapper';
    wrapper.appendChild(initRulesLogo());
    wrapper.appendChild(initHistory());
    wrapper.appendChild(initButton(SwitchToMainPage));
}

function initHistory() {
    let history = document.createElement('div');
    history.className = 'history';
    let historyHeading = document.createElement('div');
    historyHeading.className = 'history-heading';
    let h2 = document.createElement('h2');
    h2.textContent = 'About Game';
    historyHeading.appendChild(h2);
    let historyInfo = document.createElement('div');
    historyInfo.className = 'history-info';
    let h3 = document.createElement('h3');
    h3.textContent = 'History';
    historyInfo.appendChild(h3);
    let historyText = document.createElement('div');
    historyText.className = 'history-text';
    let p = document.createElement('p');
    p.textContent = '"Frogger - видеоигра жанра аркада-головоломка, разработанная компанией Konami и выпущенная ' +
        'компаниями Sega и Gremlin Industries для аркадных автоматов в июне 1981 года в Японии и в октябре того же ' +
        'года в Европе. Игра стала очень популярной и продолжает переиздаваться для многих игровых систем и ' +
        'компьютеров. Различные версии игры выходили и продолжают выходить на многих игровых системах и персональных ' +
        'компьютерах.';
    historyText.appendChild(p);
    history.appendChild(historyHeading);
    history.appendChild(historyInfo);
    history.appendChild(historyText);
    return history;
}

//Game-page init
function initGame() {
    let wrapper = document.getElementById('wrapper');
    console.log(wrapper);
    wrapper.appendChild(initCanvas('canvas1'));
    wrapper.appendChild(initCanvas('canvas2'));
    wrapper.appendChild(initCanvas('canvas3'));
    wrapper.appendChild(initCanvas('canvas4', 'score-board'));
    wrapper.appendChild(initButton(SwitchToMainPage));
}

function initCanvas(id, className) {
    let canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.className = className;
    return canvas;
}