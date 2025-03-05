
let balance = parseInt(localStorage.getItem('balance')) || 0;

function completeTask(reward, taskUrl) {
   
    if (localStorage.getItem(taskUrl) === 'true') {
        alert('Zaten bu görevi tamamladın.');
        return;
    }

 
    balance += reward;
    updateBalance();

 
    localStorage.setItem(taskUrl, 'true');

 
    localStorage.setItem('balance', balance);


    window.open(taskUrl, '_blank');
}

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

updateBalance();
