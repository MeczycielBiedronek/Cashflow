
const elementCreator = () =>{
    let type = document.getElementById('formEstateType').value;
    let val1 = document.getElementById('formEstateVal1').value;
    let val2 = document.getElementById('formEstateVal2').value;
    let val3 = document.getElementById('formEstateVal3').value;
console.log(val1, val2, val3, type);

    addElementEstate(type, val1, val2, val3);

    let taskLi = document.createElement('li');

    taskLi.innerHTML = addElementEstate(type, val1, val2, val3);
    estateDimmer.classList.add('hide');
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
    assetContainer.appendChild(taskLi);
    dodaj(val1);
};



const addElementEstate = (name, value1, value2, value3) => {
    return `<div class="smallConfirm hide">Confirm sell<br><p class="yes">Yes</p><br><p class="no">No</p>
    </div><div class="plus">
            <div class="removeBtn">Sell </div>
            <div class="assetName estate">${name}</div>
            <div class="valueBox">
                    <div id="assets_value_1" class="digits positive">
                    <p>income</p><span>${value1}</span></div>
                    <div id="assets_value_2" class="digits">
                    <p>you payed</p><span>${value2}</span></div>
                    <div id="assets_value_3" class="digits">
                    <p>mortgage</p><span>${value3}</span></div>
    </div></div>`
};

// Delete Task

function deleteTask(task){

    var liToDelete = task.closest('li');
    task.closest('ul').removeChild(liToDelete);
}
estateConfirm.addEventListener('click', elementCreator );
        // rodzic.removeChild()


 function show(task){
    var divToHide = task.closest('li').firstChild;
    divToHide.classList.remove('hide');
}       
function hide(task){
    var divToHide = task.closest('li').firstChild;
    divToHide.classList.add('hide');
}   
// Toggle Confirmation
//Estate


estateCencel.addEventListener('click', ()=> {
    estateDimmer.classList.add('hide');
    });

