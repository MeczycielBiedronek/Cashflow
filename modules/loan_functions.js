loanConfirm.addEventListener('click', () => {
    let type = 'Money<br>on demand'
    let a = document.getElementById('formLoanType').value;
    let val1 = a * 1000;
    let val2 = a * 100;
    let val3 = "expe";
console.log(type, val1, val2, val3);

    addElementLoan(type, val1, val2, val3);

    let taskLi = document.createElement('li');

    taskLi.innerHTML = addElementLoan(type, val1, val2, val3);
    loanDimmer.classList.add('hide');
// Show Confirm
    let showBtn = taskLi.querySelector('.removeBtn');
    showBtn.addEventListener('click', function() {
        show(this);
    });
//Cancel
    let hideBtn = taskLi.querySelector('.no');
    hideBtn.addEventListener('click', function() {
        hide(this);
    });
// Delete Item
  let deleteBtn = taskLi.querySelector('.yes');
  deleteBtn.addEventListener('click', function() {
      let a = taskLi.querySelector('#paySomeLoan');
      let valueToReduce =a.value * 1000;
      let newValiu1 = taskLi.querySelector('#valiu1');
      let newValiu2 = taskLi.querySelector('#valiu2');

    if(+valueToReduce === val1){
        console.log(valueToReduce.value, val1)
        odejmij(-+valueToReduce/10);
        deleteTask(this);
        hide(this);
       
       
    }else if (+valueToReduce > val1){
        alert('You want to pay more than you owe? Not very smart!')
        hide(this);
    } else {
        console.log(+valueToReduce, val1)
        hide(this);
        odejmij(-+valueToReduce/10);
        let g = val1 - valueToReduce;
        val1 = g;

        newValiu1.innerHTML = val1;
        newValiu2.innerHTML = val1/10;
    }
      

    });


    loanContainer.appendChild(taskLi);
    odejmij(val2);
});
const addElementLoan = (name, value1, value2, value3) => {
    return `<div class="smallConfirm hide"><form>Amount to pay <br><br><input id="paySomeLoan" type="number">x 1000 $
    <button type="reset" class="no">Cancel</button> <button type="reset" class="yes">Pay</button></form>
    </div><div class="minus">
    <div class="removeBtn"> Pay </div>
            <div class="expName ${value3}">${name}</div>
            
            <div class="valueBox_negative">
                    <div id="expenses_value_2" class="digits ">
                    <p>total cost</p><span id="valiu1">${value1}</span></div>
                    <div id="expenses_value_1" class="digits negative">
                    <p>monthly cost</p><span id="valiu2">${value2}</span></div>
    </div></div>`
};



loanCencel.addEventListener('click', ()=> {
    loanDimmer.classList.add('hide');
    });
