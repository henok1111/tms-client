import { AssessmentItem, calculateGrade } from "./models/assessment.model";

// const student: Student = {
//     id: "STU-001",
//     name: "Kirubel",
//     enrollementDate: Temporal.Now.instant()
// }

// //student.id = "Sara";
// console.log(student.gpa?.toFixed(2))
// console.log(student.gpa?.toFixed(2)??"Not Yet Graded")
// console.log("gjh")
// console.log("sfhdgshjs")

// function processStudent(raw: unknown){
//     if (isStudent(raw)){
//         const gpaDisplay =raw.gpa?.toFixed(2)?? "Not Yet Graded"
//         console.log(`Student ${raw.name} GPA: ${gpaDisplay}`)
//     } else{ console.error("Invalid student data received")

//     }
// }

// processStudent({id:"STU-001",name:"hana", gpa :3.7 })
// processStudent(42)



const quiz: AssessmentItem = {
id: "QUIZ-001",
kind: "quiz",
title: "SQL Basics",
correctAnswers: 8,
totalQuestions: 10,
};
const lab: AssessmentItem = {
id: "LAB-001",
kind: "lab",
title: "REST API Project",
functionalityScore: 85,
codeQualityScore: 90,
};
console.log(`Quiz grade: ${calculateGrade(quiz)}%`); 
console.log(`Lab grade: ${calculateGrade(lab)}%`); 

