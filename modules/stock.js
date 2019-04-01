let iloscAkcji = 0;
stockConfirm.addEventListener('click', () => {
    let type = document.getElementById('formStockType').value;
    let val1 = document.getElementById('formStockVal1').value;
    let d = +iloscAkcji + +val1;
    iloscAkcji = d;
    let amount = parseInt(val1, 10);
    if (amount <= 0) {
        alert(`You want to buy a ${amount} shares?
        Please buy some more`)
    } else if (!amount){
        alert(`C'mon buy some shares!`)
    } else {

    
    addElementStock(type, val1);
    let taskLi = document.createElement('div');
    taskLi.classList.add('stockMycock');
    taskLi.innerHTML = addElementStock(type, val1);
    stockDimmer.classList.add('hide');
// Show Options
   let showBtn = taskLi.querySelector('.stockDivToAdd');
    showBtn.addEventListener('mouseover', function() {
        let target = this.querySelector('#stockers');
        showEdit(target);
    });
    showBtn.addEventListener('mouseleave', function() {
        let target = this.querySelector('.stockEdit');
        hideEdit(target);
    }); 
    
                ///////  EDIT  //////
// Show Edit
let showStockEdit = taskLi.querySelector('#stock_show_edit');
showStockEdit.addEventListener('click', function() {
        let par = this.closest('.stockDivToAdd');
        let target = par.querySelector('.stockEditAmount');
        showEdit(target);

// Edit Cancel
    let stockEditCancel = taskLi.querySelector('#stock_cancel');
    stockEditCancel.addEventListener('click', () => {
    hideEdit(target);
    });
// Edit Confirm
    let stockEditConfirm = taskLi.querySelector('#stock_edit');
                         
    let a = taskLi.querySelector('#stockAmonunt').textContent;
    let oldVal = parseInt(a, 10);

    stockEditConfirm.addEventListener('click', () => {

        let b = taskLi.querySelector('#stockEditVal').value;
        let addVal = parseInt(b, 10);
        let a = +oldVal + +addVal;
        console.log(addVal);
        console.log(iloscAkcji);
        if (a <= 0) {
            console.log('wypad');
    hideEdit(target);
    let liToDelete = this.closest('.stockMycock');
    this.closest('ul').removeChild(liToDelete);
            
        } else {
            taskLi.querySelector('#stockAmonunt').textContent = a;
            hideEdit(target);
        }

        
    });

});

             ///////  SELL  //////
// Show Sell
             let showStockSell = taskLi.querySelector('#stock_show_sell');
             showStockSell.addEventListener('click', function() {
                     let par = this.closest('.stockDivToAdd');
                     let target = par.querySelector('.stockSell');
                     showEdit(target);
                    
                    
// Sell Cancel
            let stockSellCancel = taskLi.querySelector('#stock__sell_cancel');
            stockSellCancel.addEventListener('click', () => {
            hideEdit(target);
            });
// Sell Confirm
                // when typing - price estimation 


                let stockSellConfirm = taskLi.querySelector('#stock_sell');
                                        
                let a = taskLi.querySelector('#stockAmonunt').textContent;
                let oldVal = parseInt(a, 10);

                const formSum = taskLi.querySelector('#formSum');

                formSum.addEventListener('keyup', () => {
                    
                    let b = taskLi.querySelector('#stockSellVal2').value;
                    let addVal = parseInt(b, 10);
                    //sell price
                    let c = taskLi.querySelector('#stockSellVal1').value;
                    let sellVal = parseInt(c, 10);
                    let d = +addVal * +sellVal;
                    console.log('siema');
                    taskLi.querySelector('#youWillGet').textContent = d;


                });
                stockSellConfirm.addEventListener('click', () => {
                    //sell amount
                    let b = taskLi.querySelector('#stockSellVal2').value;
                    let addVal = parseInt(b, 10);
                    let a = +oldVal - +addVal;
                    if(addVal > oldVal){
                        alert('You can not sell more than you possess')
                    }else{

                    if (a <= 0) {
                        console.log('goodBye!');
                hideEdit(target);
                let liToDelete = this.closest('.stockMycock');
                this.closest('ul').removeChild(liToDelete);
                        
                    } else {
                        taskLi.querySelector('#stockAmonunt').textContent = a;
                        hideEdit(target);
                    }
                }
                    
                });

    });
    /* let hideBtn = taskLi.querySelector('.no');
    hideBtn.addEventListener('click', function() {
        hide(this);
    });
// Delete Item
  let deleteBtn = taskLi.querySelector('.yes');
  deleteBtn.addEventListener('click', function() {
      deleteTask(this);
      dodaj(-val1);
    }); */
    stockContainer.appendChild(taskLi);
} // end of else if
});
const addElementStock = (name, value1) => {
    return `
    <div class="stockDivToAdd">
        <div class="stockSell hide round">
            <form id="formSum">
            <div>
            sell amount <input id="stockSellVal2" type="number">
            </div>
            <div>
            current price <input id="stockSellVal1" type="number">
        </div><div>You will get <span id="youWillGet">0</span> $</div>
        <button type="reset" id="stock__sell_cancel">Cancel</button>
        <button type="reset" id="stock_sell">Sell</button>
        </form>
        </div>
        <div class="stockEditAmount hide round">
                <form>
                    <div>
                    add amount <input id="stockEditVal" type="number">
                    </div><br>
                    <button type="reset" id="stock_cancel">Cancel</button>
                    <button type="reset" id="stock_edit">Confirm</button></form>
        </div>
    <div class="stock round">
    <div id="stockers" class="stockEdit hide round">
    <p id="stock_show_edit">Edit</p><br>
    <p id="stock_show_sell">Sell</p>
</div>
            <div class="icon" style="background-image: url(img/${name}.svg);"></div>
            ${name}
    </div>
    <div id="stockAmonunt" class="stockAmonunt round">${value1}</div>

</div>`
};

function showEdit(target){
    target.classList.remove('hide');
} 
function hideEdit(target){
     target.classList.add('hide');
}   
stockCencel.addEventListener('click', ()=> {
    stockDimmer.classList.add('hide');
    });