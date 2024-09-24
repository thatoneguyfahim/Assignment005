function getNumber(id){
    const num= document.getElementById(id).innerText;
    return parseFloat(num);
}

function showSectionById(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}

function setColor(id){
    document.getElementById('donate-button').classList.add('bg-slate-300')
    document.getElementById('history-button').classList.add('bg-slate-300')
    document.getElementById(id).classList.remove('bg-slate-300')
}