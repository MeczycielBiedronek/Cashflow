// funkcja dodaj element do ul
const assetContainer = document.getElementById('assets');
const estateConfirm = document.getElementById('estateConfirm');
const estateDimmer = document.getElementById('estateDimmer');
const estateCencel = document.getElementById('estateCancel');
const addEstateBtn = document.getElementById('addEstate');
const deleteBtn = taskLi.querySelector('.removeBtn');

const addElementEstate = (name, value1, value2, value3) => {
    let html = `
    <div class="plus">
            <div class="removeBtn">Sell </div>
            <div class="assetName estate">${name}</div>
            <div class="valueBox">
                    <div id="assets_value_1" class="digits positive">
                    <p>income</p><span>${value1}</span></div>
                    <div id="assets_value_2" class="digits">
                    <p>you payed</p><span>${value2}</span></div>
                    <div id="assets_value_3" class="digits">
                    <p>mortgage</p><span>${value3}</span></div>
             </div>
    </div>`;
    assetContainer.insertAdjacentHTML('beforeend', html);
}
///////////////////////////////////
function addNewTask(title){
    var taskLi = document.createElement('li');
    taskLi.innerHTML = prepareTaskHTML(title);

    // Event toggle and delete

    var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');
    var deleteBtn = taskLi.querySelector('.delete-task-btn');

    toggleCompleteBtn.addEventListener('click', function() {
        toggleTaskComplete(this);
    });

    deleteBtn.addEventListener('click', function() {
        deleteTask(this);
    });
    // Add task to DOM
tasksContainer.appendChild(taskLi);

}
function prepareTaskHTML(title){
   
    return '<div class="input-group">' +
             '<div class="input-group-prepend">' +
             '<button class="btn btn-secondary toggle-complete-btn"><i class="fa fa-check"></i>' +
             '</button>' +
            ' </div>' +
             '<input type="text" class="form-control"  placeholder="Tytuł zadania" value="' + title + '">' + 
             '<span class="input-group-btn"></span>' +
             '<div class="input-group-append">' +
             '<button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i></button>' +
             '</div>' +
            ' </div>'
 }
////////////////////////////////////////////////// 


estateConfirm.addEventListener('click', () => {
    let type = document.getElementById('formEstateType').value;
    let val1 = document.getElementById('formEstateVal1').value;
    let val2 = document.getElementById('formEstateVal2').value;
    let val3 = document.getElementById('formEstateVal3').value;
    addElementEstate(type, val1, val2, val3);
    estateDimmer.classList.add('hide');
});

// Remove Estate

deleteBtn.addEventListener('click', function() {
    deleteTask(this);

});

        // Delete From the list

function deleteTask(task){

    var liToDelete = task.closest('li');
    task.closest('ul').removeChild(liToDelete);

};


// Toggle Confirmation
//Estate


estateCencel.addEventListener('click', ()=> {
estateDimmer.classList.add('hide');
});

addEstateBtn.addEventListener('click', ()=> {
estateDimmer.classList.remove('hide');
});