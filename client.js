const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function bonusCal(employee) {
  //creating new object 
  let newObject = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }
  if (employee.reviewRating < 3) {
    newObject.bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    newObject.bonusPercentage = .04;
  } else if (employee.reviewRating === 4) {
    newObject.bonusPercentage = .06;
  } else if (employee.reviewRating === 5) {
    newObject.bonusPercentage = .10
  }
  if (employee.employeeNumber.length === 4) {
    newObject.bonusPercentage += .05
  }
  if (employee.annualSalary > 65000) {
    newObject.bonusPercentage -= 0.01;
  }
  if (newObject.bonusPercentage > 0.13) {
    newObject.bonusPercentage = 0.13;
  } else if (newObject.bonusPercentage < 0) {
    newObject.bonusPercentusage = 0;
  }
  //totalBonus calculation
  newObject.totalBonus = Math.round((employee.annualSalary) * newObject.bonusPercentage);
  //totalCompensation calculation
  newObject.totalCompensation = Number(employee.annualSalary) + newObject.totalBonus;

  console.log(newObject);
}

//looping through the employees array. Also giving bonus cal access to the loop
for (let i = 0; i < employees.length; i++) {
    bonusCal(employees[i])
  }



