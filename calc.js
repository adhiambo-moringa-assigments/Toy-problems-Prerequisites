// Challenge 3: Net Salary Calculator (Toy Problem)
// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.
let grossSalary = 300000;
let paye;
let nssf;
let nssfSelection = "oldRate";   // nssf options include; "newRateT1", "newRateT2" & "oldRate"
let nhif;
function calculateNetSalary(){
  calculateNssf();
  calculatePaye();
  calculateNhif();
  let netSalary = grossSalary - nssf - nhif - (paye/100 * grossSalary);
  return console.log(`For Gross salary ${grossSalary}, Net salary is ${netSalary}.
  PAYE equals ${paye/100*grossSalary}, NSSF equals ${nssf} and NHIF equals ${nhif}`);
}
(calculateNetSalary());
//here will calculating monthly taxable income
function calculatePaye(){
  switch(true){
      case (grossSalary <= 24000):
          paye = 10;
          break;
      case(grossSalary <= 32333):
          paye = 25;
          break;
      case (grossSalary > 32333):
          paye = 30;
          break;
  }
  return paye;
}
// console.log(calculatePaye());
function calculateNhif(){
  switch(true){
      case (grossSalary <= 5999):
          nhif = 150;
          break;
      case (grossSalary <= 7999):
          nhif = 300;
          break;
      case (grossSalary <= 11999):
          nhif = 400;
          break;
      case (grossSalary <= 14999):
          nhif = 500;
          break;
      case (grossSalary <= 19999):
          nhif = 600;
          break;
      case (grossSalary <= 24999):
          nhif = 750;
          break;
      case (grossSalary <= 29999):
          nhif = 850;
          break;
      case (grossSalary <= 34999):
          nhif = 900;
          break;
      case (grossSalary <= 39999):
          nhif = 950;
          break;
      case (grossSalary <= 49999):
          nhif = 1100;
          break;
      case (grossSalary <= 59999):
          nhif = 1200;
          break;
      case (grossSalary <= 69999):
          nhif = 1300;
          break;
      case (grossSalary <= 79999):
          nhif = 1400;
          break;
      case (grossSalary <= 89999):
          nhif = 1500;
          break;
      case (grossSalary <= 99999):
          nhif = 1600;
          break;
      case (grossSalary >= 100000):
          nhif = 1700;
          break;
  }
  return nhif;
}
//New rates
function calculateNssf(){
  if(nssfSelection === "newRateT1"){
      nssf = grossSalary * 6/100;
      if(nssf > 6000){
          nssf = 6000;
      }
      return nssf;
  }else if(nssfSelection === "newRateT2"){
      nssf = grossSalary * 6/100;
      if(nssf < 6001){
          nssf = 6001;
          return nssf;
      }else if(nssf >18000){
          nssf = 18000
      }
      return nssf;
  }else if(nssfSelection === "oldRate"){
      nssf = grossSalary * 5/100;
      if(nssf > 400){
          nssf = 400;
      }
      return nssf;
  }
  return nssf;
}