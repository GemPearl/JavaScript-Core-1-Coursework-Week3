/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents;
function groupIsOnlyStudents (student, group){// return true if student is in group

  return group.every(function(element)
  {
    return student.includes(element);
  });
}




// var groupIsOnlyStudents = student.every(group); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
