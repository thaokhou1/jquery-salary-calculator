$(document).ready(readyNow);
let employees=[];
let amount=[];
function person(firstName, lastName, id, job, salary){
    this.firstName= firstName;
    this.lastName= lastName;
    this.id= id;
    this.job= job;
    this.salary= salary;
}

function addPerson(){
    const newPerson = new person($(`#firstName`).val(), $(`#lastName`).val(), $(`#idNumber`).val(), $(`#jobTitle`).val(), $(`#annualSalary`).val() );
    
    let employeeFirstName= ($('#firstName').val());
    let employeeLastName= ($('#lastName').val());
    let employeeIdNumber= ($('#idNumber').val());
    let employeeJobTitle= ($('#jobTitle').val());
    let employeeAnnualSalary= ($('#annualSalary').val());
    
    if(employeeFirstName === ''){
            $(`#firstName`).addClass('error');
            alert('Please fill out your first name')
        }
        else if(employeeLastName === ''){
            $(`#lasttName`).addClass('error');
            alert('Please fill out your last name')
        }
        else if(employeeIdNumber === ''){
            $(`#idNumber`).addClass('error');
            alert('Please fill out your Id Number')
        }
        else if(employeeJobTitle=== ''){
            $(`#jobTitle`).addClass('error');
            alert('Please fill out you job title')
        }
        else if(employeeAnnualSalary === ''){
            $(`#annualSalary`).addClass('error');
            alert('Please fill out your annual salary')
     
        }
        else{
            $('#firstName').removeClass('error');
            $('#lastName').removeClass('error');
            $('#idNumber').removeClass('error');
            $('#jobTitle').removeClass('error');
            $('#annualSalary').removeClass('error');
        
    
    
    
    employees.push(newPerson);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    displayPeople();
    total();
 
   
        }
}

function displayPeople(){
   let el= $(`#tBody`);
   el.empty();
   for (let i = 0; i < employees.length; i++) {
     let tr = `<tr>`+
     `<td>` + employees[i].firstName + `</td>` +
     `<td>` + employees[i].lastName + `</td>`+
     `<td>` + employees[i].id + `</td>` +
     `<td>` + employees[i].job + `</td>` +
     `<td>` + employees[i].salary +`</td>` +
     `<td>` + ` <button>Delete</button>` + `</td>`+
    `</tr>`;
       el.append(tr);
   
   }
}




    
    
    function total(){
        let totalAmount= 0;
        for (let i = 0; i < employees.length; i++) {
           totalAmount += Number(employees[i].salary);
           console.log('totalAmount:', totalAmount);
           let el = $(`#monthly`);
           el.empty();
           el.append(totalAmount);
        
        }
        if (totalAmount >= 20000) {
            $('#totalMonthlyCost').toggleClass('budgetExceeds');
            alert("Budget of 20000 exceeded!")
        }
    }

 function deletePerson(){
        $(this).closest('tBody').remove();
    return
    
}




function readyNow(){
    $('#submitBtn').on('click', addPerson);
    $('#deleteBtn').on('click', deletePerson);

    }
