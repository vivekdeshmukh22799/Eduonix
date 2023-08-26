function printFullName() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    
    var fullName = firstName + " " + middleName + " " + lastName;
    
    alert("your Full Name is : " + fullName);
}




//👻 💀 ☠️ Practice/Optional code 👻 💀 ☠️
// document.addEventListener('DOMContentLoaded', function () {
//     const submitBtn = document.getElementById('submitBtn');

//     submitBtn.addEventListener('click', function () {
//         const firstName = document.getElementById('firstName').value;
//         const middleName = document.getElementById('middleName').value;
//         const lastName = document.getElementById('lastName').value;

//         let fullName = firstName;

//         if (middleName !== '') {
//             fullName += ' ' + middleName;
//         }

//         fullName += ' ' + lastName;

//         alert('Your Full Name is : ' + fullName);
//     });
// });
