let startBtn = document.getElementById('startBtn');
let startContainer = document.getElementById('start');
let childCost = 0;
let showSavings = 0;
let tax = 0;
let mortgage = 0;
let studentLoan = 0;
let carPayment = 0;
let ccPayment = 0;
let retail = 0;
let otherExp = 0;
////// Big
let mortgageBig =0;
let studentLoanBig =0;
let carPaymentBig =0;
let ccPaymentBig =0;
let retailBig =0;

/// On "change" state of dropdown menu  - assigns expensses and earnings

let occupationSelect = document.getElementById('occupation');
occupationSelect.addEventListener('change', ()=> {
    

    /////  Select occupation /// 

    if (occupationSelect.value === 'Policeman'){
        
        let salary = 3000;
        let showchildCost = 160;
        let showTotalCost = 1880;
        let showCashFlow = salary-showTotalCost;
        showSavings = 520;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
/////////////
        tax = 580;
        mortgage = 400;
        studentLoan = 0;
        carPayment = 100;
        ccPayment = 60;
        retail = 50;
        otherExp = 690;
        ////// Big
        mortgageBig =46000;
        studentLoanBig =0
        carPaymentBig =5000;
        ccPaymentBig =2000;
        retailBig =1000;
        bankTake = showSavings + showCashFlow;
             
    } else if (occupationSelect.value === 'Teacher'){
        let salary = 3300;
        let showchildCost = 180;
        let showTotalCost = 2190;
        let showCashFlow = salary-showTotalCost;
        showSavings = 400;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 630;
        mortgage = 500;
        studentLoan = 60;
        carPayment = 100;
        ccPayment = 90;
        retail = 50;
        otherExp = 760;
        ////// Big
        mortgageBig = 50000;
        studentLoanBig = 12000;
        carPaymentBig = 5000;
        ccPaymentBig = 3000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Engineer'){
        let salary = 4900;
        let showchildCost = 250;
        let showTotalCost = 3210;
        let showCashFlow = salary-showTotalCost;
        showSavings = 400;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 1050;
        mortgage = 700;
        studentLoan = 60;
        carPayment = 140;
        ccPayment = 120;
        retail = 50;
        otherExp = 1090;
        ////// Big
        mortgageBig = 75000;
        studentLoanBig = 12000;
        carPaymentBig = 7000;
        ccPaymentBig = 4000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Secretary'){
        let salary = 2500;
        let showchildCost = 140;
        let showTotalCost = 1620;
        let showCashFlow = salary-showTotalCost;
        showSavings = 710;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 460;
        mortgage = 400;
        studentLoan = 0;
        carPayment = 80;
        ccPayment = 60;
        retail = 50;
        otherExp = 570;
        ////// Big
        mortgageBig = 38000;
        studentLoanBig = 0;
        carPaymentBig = 4000;
        ccPaymentBig = 2000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Nurse'){
        let salary = 3100;
        let showchildCost = 170;
        let showTotalCost = 1980;
        let showCashFlow = salary-showTotalCost;
        showSavings = 480;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 600;
        mortgage = 400;
        studentLoan = 30;
        carPayment = 100;
        ccPayment = 90;
        retail = 50;
        otherExp = 710;
        ////// Big
        mortgageBig = 47000;
        studentLoanBig = 6000;
        carPaymentBig = 5000;
        ccPaymentBig = 3000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Lawyer'){
        let salary = 7500;
        let showchildCost = 380;
        let showTotalCost = 5420;
        let showCashFlow = salary-showTotalCost;
        showSavings = 400;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 1830;
        mortgage = 1100;
        studentLoan = 390;
        carPayment = 220;
        ccPayment = 180;
        retail = 50;
        otherExp = 1650;
        ////// Big
        mortgageBig = 115000;
        studentLoanBig = 78000;
        carPaymentBig = 11000;
        ccPaymentBig = 6000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Keeper'){
        let salary = 1600;
        let showchildCost = 70;
        let showTotalCost = 950;
        let showCashFlow = salary-showTotalCost;
        showSavings = 560;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 280;
        mortgage = 200;
        studentLoan = 0;
        carPayment = 60;
        ccPayment = 60;
        retail = 50;
        otherExp = 300;
        ////// Big
        mortgageBig = 20000;
        studentLoanBig = 0;
        carPaymentBig = 4000;
        ccPaymentBig = 2000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Manager'){
        let salary = 4600;
        let showchildCost = 240;
        let showTotalCost = 2930;
        let showCashFlow = salary-showTotalCost;
        showSavings = 400;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 910;
        mortgage = 700;
        studentLoan = 60;
        carPayment = 120;
        ccPayment = 90;
        retail = 50;
        otherExp = 1000;
        ////// Big
        mortgageBig = 75000;
        studentLoanBig = 12000;
        carPaymentBig = 6000;
        ccPaymentBig = 3000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Mechanic'){
        let salary = 2000;
        let showchildCost = 110;
        let showTotalCost = 1280;
        let showCashFlow = salary-showTotalCost;
        showSavings = 670;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 360;
        mortgage = 300;
        studentLoan = 0;
        carPayment = 60;
        ccPayment = 60;
        retail = 50;
        otherExp = 450;
        ////// Big
        mortgageBig = 31000;
        studentLoanBig = 0;
        carPaymentBig = 3000;
        ccPaymentBig = 2000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Doctor'){
        let salary = 13200;
        let showchildCost = 640;
        let showTotalCost = 9650;
        let showCashFlow = salary-showTotalCost;
        showSavings = 400;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 3420;
        mortgage = 1900;
        studentLoan = 750;
        carPayment = 380;
        ccPayment = 270;
        retail = 50;
        otherExp = 2880;
        ////// Big
        mortgageBig = 202000;
        studentLoanBig = 150000;
        carPaymentBig = 19000;
        ccPaymentBig = 9000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Pilot'){
        let salary = 9500;
        let showchildCost = 480;
        let showTotalCost = 6900;
        let showCashFlow = salary-showTotalCost;
        showSavings = 400;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 2350;
        mortgage = 1330;
        studentLoan = 0;
        carPayment = 300;
        ccPayment = 660;
        retail = 50;
        otherExp = 2210;
        ////// Big
        mortgageBig = 143000;
        studentLoanBig = 0;
        carPaymentBig = 15000;
        ccPaymentBig = 22000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    }
    else if (occupationSelect.value === 'Driver'){
        let salary = 2500;
        let showchildCost = 140;
        let showTotalCost = 1620;
        let showCashFlow = salary-showTotalCost;
        showSavings = 750;
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 460;
        mortgage = 400;
        studentLoan = 0;
        carPayment = 80;
        ccPayment = 60;
        retail = 50;
        otherExp = 570;
        ////// Big
        mortgageBig = 38000;
        studentLoanBig = 0;
        carPaymentBig = 4000;
        ccPaymentBig = 2000;
        retailBig = 1000; 
        bankTake = showSavings + showCashFlow;
    } else {
        let salary = 'not selected';
        let showchildCost = 'not selected';
        let showTotalCost = 'not selected';
        let showCashFlow = salary-showTotalCost;
        showSavings = 'not selected';
        fillBlank(salary, showchildCost, showTotalCost, showCashFlow, showSavings);
        tax = 'not selected';
        mortgage = 'not selected';
        studentLoan = 'not selected';
        carPayment = 'not selected';
        ccPayment = 'not selected';
        retail = 'not selected';
        otherExp = 'not selected';
        ////// Big
        mortgageBig = 'not selected';
        studentLoanBig = 'not selected';
        carPaymentBig = 'not selected';
        ccPaymentBig = 'not selected';
        retailBig = 'not selected'; 
    }
    
});
startBtn.addEventListener('click', ()=>{
    startContainer.classList.add('hide');
    wraper.classList.add('darker')
    left.classList.remove('hide');
    mid.classList.remove('hide');
    right.classList.remove('hide');
    occuNameField.innerHTML = occupationSelect.value;
    taxesAndOther.innerHTML = tax + otherExp;
    odejmij(tax);
    odejmij(otherExp);
    getLoansInPlace(tax, mortgage, mortgageBig, studentLoan, studentLoanBig, carPayment, carPaymentBig, ccPayment, ccPaymentBig, retail, retailBig, otherExp);
    alert('Remember to take ' + bankTake + ' $ from the bank');

});

/// shows costs and earnings

const fillBlank = (salary, showchildCost, showTotalCost, showCashFlow, showSavings) => {
    formoccupationName.innerHTML = occupationSelect.value;
    formstartSalary.innerHTML = salary;
    formstartCost.innerHTML = showTotalCost;
    formstartCashflow.innerHTML = showCashFlow;
    formstartChildCost.innerHTML = showchildCost;
    formsavings.innerHTML = showSavings;
    montInc = salary;
    childCost = showchildCost;
    calculate();
    }

/// Takes starting conditions from form and creates elements adding player's expenses 

 const getLoansInPlace = (tax, mortgage, mortgageBig, studentLoan, studentLoanBig, carPayment, carPaymentBig, ccPayment, ccPaymentBig, retail, retailBig,  otherExp) =>{
     /// tax inner html + odejmij
     if (mortgage + mortgageBig === 0){console.log('nic z tego')} else {
     addStartExpenses('Mortgage', mortgage, mortgageBig, 'expe');
    };
     if (studentLoan + studentLoanBig === 0){console.log('nic z tego')} else {
        addStartExpenses('School Loans', studentLoan, studentLoanBig, 'schExpe');
     };
     if (carPayment + carPaymentBig === 0){console.log('nic z tego')} else {
     addStartExpenses('Car Loans', carPayment, carPaymentBig, 'carExpe');
    };
    if (ccPayment + ccPaymentBig === 0){console.log('nic z tego')} else {
     addStartExpenses('Credit Cards', ccPayment, ccPaymentBig, 'ccExpe');
    };
    if (retail + retailBig === 0){console.log('nic z tego')} else {
     addStartExpenses('Retail Debt', retail, retailBig, 'retExpe');
    };
 };