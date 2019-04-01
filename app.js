addEstateBtn.addEventListener('click', ()=> {
    estateDimmer.classList.remove('hide');
});
addBusinessBtn.addEventListener('click', ()=> {
    businessDimmer.classList.remove('hide');
});
addOtherBtn.addEventListener('click', ()=> {
    otherDimmer.classList.remove('hide');
});
addStockBtn.addEventListener('click', ()=> {
    stockDimmer.classList.remove('hide');
});
addLoanBtn.addEventListener('click', ()=> {
    loanDimmer.classList.remove('hide');
});
finish.addEventListener('click', ()=> {
winDimmer.classList.add('hide');
});

// Blocks Enter Key on INPUT areas (preventing from refreshing the page)
window.addEventListener('keydown',function(e){
    if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){
    if(e.target.nodeName=='INPUT'){e.preventDefault();
        return false;
        }
    }
},
true);
// Delete Task

function deleteTask(task){

    var liToDelete = task.closest('li');
    task.closest('ul').removeChild(liToDelete);
}
        // rodzic.removeChild()

 function show(task){
    var divToHide = task.closest('li').firstChild;
    console.log(divToHide)
    divToHide.classList.remove('hide');
}       
function hide(task){
    var divToHide = task.closest('li').firstChild;
    divToHide.classList.add('hide');
}   
// Toggle Confirmation
//Estate