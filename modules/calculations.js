let montInc = 0;
let passInc = 0;
let totExp = 0; 
let casFl = 0;

// wpisz dane
const dodaj = (inc) => {
    passInc = +passInc + +inc;
    calculate();
}
// wpisz dane
const odejmij = (exp) => {
    totExp = +totExp + +exp;
    calculate();
}


const calculate = () => {
    cashFlow.innerHTML = +passInc +montInc - +totExp;;
    totalExpenses.innerHTML = totExp;
    passiveIncome.innerHTML = passInc;
    monthlyIncome.innerHTML = +passInc + +montInc;
    if(totExp<passInc){
        cashFlow.innerHTML = 'YOU WON !';
        monthlyIncome.innerHTML = 'YOU WON !';
        totalExpenses.innerHTML = 'YOU WON !';
        setTimeout(myFunction, 3000);
        function myFunction() {
            winDimmer.classList.remove('hide');
          }
    }
}
////Test
/*
passiveIncome.addEventListener('click', ()=>{
    dodaj(100);
});
totalExpenses.addEventListener('click', ()=>{
    odejmij(100);
});
*/

calculate();