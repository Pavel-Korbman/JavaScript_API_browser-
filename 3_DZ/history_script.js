const historyList = document.querySelector('.history-list');
const history = JSON.parse(localStorage.getItem('history'));

history.forEach(element => {
    const historyPoint = document.createElement('li');
    const linkPoint = document.createElement('a');
    historyList.appendChild(historyPoint);
    historyPoint.appendChild(linkPoint);
    linkPoint.href = element[1];
    linkPoint.textContent = element[0];
});