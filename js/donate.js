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
        alert("Not a number")
    }

})