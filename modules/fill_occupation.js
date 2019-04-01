const addStartExpenses = (name, a, b, c) => {

    let val1 = b;
    let val2 = a;
    let val3 = c;
console.log(name, val1, val2, val3);

addElementStartLoan(name, val1, val2, val3);

    let taskLi = document.createElement('li');

    taskLi.innerHTML = addElementStartLoan(name, val1, val2, val3);
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
      deleteTask(this);
      odejmij(-val2);
    });
    loanContainer.appendChild(taskLi);
    odejmij(val2);
};
const addElementStartLoan = (name, value1, value2, value3) => {
    return `<div class="smallConfirm hide">Confirm Pay<br><p class="yes">Yes</p><br><p class="no">No</p>
    </div><div class="minus">
    <div class="removeBtn"> Pay </div>
            <div class="expName ${value3}">${name}</div>
            
            <div class="valueBox_negative">
                    <div id="expenses_value_2" class="digits ">
                    <p>total cost</p><span>${value1}</span></div>
                    <div id="expenses_value_1" class="digits negative">
                    <p>monthly cost</p><span>${value2}</span></div>
    </div></div>`
};
