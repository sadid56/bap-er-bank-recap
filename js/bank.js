document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputEelement = document.getElementById('deposit-input');
    const depositInputEelentSrting = depositInputEelement.value;
    const depositInput = parseFloat(depositInputEelentSrting);
    depositInputEelement.value = '';
    if(isNaN(depositInput)){
        alert('Please provide me a valid number!');
        return;
    }

     const depositAccountEelement = document.getElementById('deposit-account');
     const depositAccountEelementString = depositAccountEelement.innerText;
     const depositeAccount = parseFloat(depositAccountEelementString);
     const depositTotal = depositeAccount + depositInput;
     depositAccountEelement.innerText = depositTotal;

    const balanceAccountElement = document.getElementById('balance-account');
    const balanceAccountElementString = balanceAccountElement.innerText;
    const balanceAccount = parseFloat(balanceAccountElementString);
    const deposit = depositTotal + balanceAccount;
    balanceAccountElement.innerText = deposit;

}
)

//! wiathdraw 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputFieldElment = document.getElementById('withdraw-input');
    const withdrawInputFieldSrting = withdrawInputFieldElment.value;
    const withdrawInputField = parseFloat(withdrawInputFieldSrting);
    withdrawInputFieldElment.value = '';
    if(isNaN(withdrawInputField)){
        alert('Please provide me a valid number!');
        return;
    }
    
    const withdrawAccountElement = document.getElementById('withdraw-account');
    const withdrawAccountString = withdrawAccountElement.innerText;
    const withdrawAccount = parseFloat(withdrawAccountString);

    const totalWithdraw = withdrawAccount + withdrawInputField;
    withdrawAccountElement.innerText = totalWithdraw;

    const balanceAccountElement = document.getElementById('balance-account');
    

    const balanceAccountElementString = balanceAccountElement.innerText;
    const balanceAccount = parseFloat(balanceAccountElementString);
    
    

    const withdraw = balanceAccount - totalWithdraw;
    balanceAccountElement.innerText = withdraw;
})