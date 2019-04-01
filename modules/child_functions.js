    // Show Options
   addChildBtn.addEventListener('click', function() {
    kiddCover1.classList.remove('hide');
    });
    addChildBtn.addEventListener('mouseleave', function() {
        hideKidEdit();
    });
let childCount = 0;
    
    addChild.addEventListener('click', () => {
   if(childCount < 3) {
    let taskLi = document.createElement('div');
    taskLi.classList.add('takeMychild');
    taskLi.innerHTML = addElementChild(childCost);
    kiddCover1.classList.add('hide');

    
    childContainer.appendChild(taskLi);
    kiddCover2.classList.remove('hide');
    childCount++;
    odejmij(childCost)
    console.log(childCount);
}else{alert('You can only have 3 children. Sorry :(')}
});
    
    

const addElementChild = (childCost) => {
    return `<div class="childDivToAdd">
    <div class="stock red round">
            <div class="icon" style="background-image: url(img/white_baby.svg);"></div>
           - ${childCost} $
    </div>

</div>`
};

function showKidEdit(){
    kiddCover1.classList.remove('hide');
} 
function hideKidEdit(){
    kiddCover1.classList.add('hide');
    kiddCover2.classList.add('hide');
}  
