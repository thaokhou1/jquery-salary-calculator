$(document).ready(readyNow);
function readyNow(){
    $('#submitBtn').on('click', handleSubmit);
}




function handleSubmit(){
    let employeeFirstName= ($('#firstName').val());
    let employeeLastName= ($('#lastName').val());
    let employeeIdNumber= ($('#idNumber').val());
    let employeeJobTitle= ($('#jobTitle').val());
    let employeeAnnualSalary= ($('#annualSalary').val());


}
console.log(handleSubmit);
