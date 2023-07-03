
function calculateAge() {
    document.getElementById("result").innerHTML='';
    
    var birthDate = new Date(document.getElementById("birthdate").value);
    var currentDate = new Date();

    var ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    var ageMonth = currentDate.getMonth() - birthDate.getMonth();
    var ageDay = currentDate.getDate() - birthDate.getDate();
  
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        ageYear--;
        ageMonth += 12;
    }

    if (ageDay < 0) {
        var daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageDay += daysInLastMonth;
        ageMonth--;
    }

    document.getElementById("result").innerHTML = "Your age is " + ageYear + " years, " + ageMonth + " months, and " + ageDay + " days.";
}


