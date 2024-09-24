document.getElementById('donate').addEventListener('click', function(){
    const base = getNumber('base-amount')
    const donateAmount = parseFloat(document.getElementById('donate-amount').value)
    if (donateAmount >= 0){
    const donation = getNumber('donation')
    const newBase = base - donateAmount;
    const newDonation = donation+donateAmount;
    document.getElementById('base-amount').innerText = newBase;
    document.getElementById('donation').innerText = newDonation;
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
    }
    else {
        alert("Inappropriate Donation Amount")
    }

})