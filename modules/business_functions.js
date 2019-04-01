
businessConfirm.addEventListener('click', () => {
    let type = document.getElementById('formBusinessType').value;
    let val1 = document.getElementById('formBusinessVal1').value;
    let val2 = document.getElementById('formBusinessVal2').value;
    let val3 = document.getElementById('formBusinessVal3').value;
console.log(val1, val2, val3, type);

    addElementbusiness(type, val1, val2, val3);

    let taskLi = document.createElement('li');

    taskLi.innerHTML = addElementbusiness(type, val1, val2, val3);
    businessDimmer.classList.add('hide');
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
      dodaj(-val1);
    });
    businessContainer.appendChild(taskLi);
    dodaj(val1);
});
const addElementbusiness = (name, value1, value2, value3) => {
    return `<div class="smallConfirm hide">Confirm sell<br><p class="yes">Yes</p><br><p class="no">No</p>
    </div><div class="plus">
            <div class="removeBtn">Sell </div>
            <div class="assetName business">${name}</div>
            <div class="valueBox">
                    <div id="assets_value_1" class="digits positive">
                    <p>income</p><span>${value1}</span></div>
                    <div id="assets_value_2" class="digits">
                    <p>you payed</p><span>${value2}</span></div>
                    <div id="assets_value_3" class="digits">
                    <p>debt</p><span>${value3}</span></div>
    </div></div>`
};



businessCencel.addEventListener('click', ()=> {
    businessDimmer.classList.add('hide');
    });
