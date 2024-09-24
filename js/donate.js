document.getElementById('donate').addEventListener('click', function(){
    const base = getNumber('base-amount')
    const donateAmount = parseFloat(document.getElementById('donate-amount').value)
    if (donateAmount >= 0){
    const donation = getNumber('donation')
    const newBase = base - donateAmount;
    const newDonation = donation+donateAmount;
    document.getElementById('base-amount').innerText = newBase;
    document.getElementById('donation').innerText = newDonation;

    const p = document.createElement('p');
    p.innerText = `${donateAmount} TK is donated for Donate for Flood at Noakhali, Bangladesh`
    p.classList.add('shadow-lg');
    p.classList.add('space-y-6');
    p.classList.add('p-6');
    document.getElementById('history-container').appendChild(p);

    const dateTime= new Date();
    const pDate = document.createElement('p');
    document.getElementById('history-container').appendChild(pDate);
    pDate.innerText = dateTime;
    pDate.classList.add('shadow-sm');
    pDate.classList.add('space-y-2');
    pDate.classList.add('p-2');
    }
    else {
        alert("Inappropriate Donation Amount")
    }

})

document.getElementById('donate-feni').addEventListener('click', function(){
    const base = getNumber('base-amount')
    const donateAmount = parseFloat(document.getElementById('donate-amount-feni').value)
    if (donateAmount >= 0){
    const donation = getNumber('donation-amount-feni')
    const newBase = base - donateAmount;
    const newDonation = donation+donateAmount;
    document.getElementById('base-amount').innerText = newBase;
    document.getElementById('donation-amount-feni').innerText = newDonation;

    const p = document.createElement('p');
    p.innerText = `${donateAmount} TK is donated for Donate for Flood Relief in Feni,Bangladesh`
    p.classList.add('shadow-lg');
    p.classList.add('space-y-6');
    p.classList.add('p-6');
    document.getElementById('history-container').appendChild(p);

    const dateTime= new Date();
    const pDate = document.createElement('p');
    document.getElementById('history-container').appendChild(pDate);
    pDate.innerText = dateTime;
    pDate.classList.add('shadow-sm');
    pDate.classList.add('space-y-2');
    pDate.classList.add('p-2');
    }
    else {
        alert("Inappropriate Donation Amount")
    }

})

document.getElementById('donate-quota').addEventListener('click', function(){
    const base = getNumber('base-amount')
    const donateAmount = parseFloat(document.getElementById('donate-amount-quota').value)
    if (donateAmount >= 0){
    const donation = getNumber('donation-amount-quota')
    const newBase = base - donateAmount;
    const newDonation = donation+donateAmount;
    document.getElementById('base-amount').innerText = newBase;
    document.getElementById('donation-amount-quota').innerText = newDonation;

    const p = document.createElement('p');
    p.innerText = `${donateAmount} TK is donated for Aid for Injured in the Quota Movement`
    p.classList.add('shadow-lg');
    p.classList.add('space-y-6');
    p.classList.add('p-6');
    document.getElementById('history-container').appendChild(p);

    const dateTime= new Date();
    const pDate = document.createElement('p');
    document.getElementById('history-container').appendChild(pDate);
    pDate.innerText = dateTime;
    pDate.classList.add('shadow-sm');
    pDate.classList.add('space-y-2');
    pDate.classList.add('p-2');
    }
    else {
        alert("Inappropriate Donation Amount")
    }

})