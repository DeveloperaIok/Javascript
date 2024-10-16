function student(a, b, c, d) {
  let studentinfo = {
    Name: a,
    Age: b,
    Marks: c,
    Grades: d,
  };
  console.log(studentinfo);
}
student("alok", 20, 85, "B");

for (let i = 1; i <= 2; i++) {
  let name = prompt("enter your name");
  console.log(i);
  console.log(name);
  let age = prompt("enter your Age");
  console.log(age);
  let marks = prompt("enter your Marks");
  console.log(age);
  let grades = prompt("enter your Grades");
  console.log(grades);
}
