export interface Quiz {
id: string;
kind: "quiz";
title: string;
correctAnswers: number;
totalQuestions: number;
}
export interface LabAssignment {
readonly id: string;
kind: "lab";
title: string;
functionalityScore: number;
codeQualityScore: number;
}
export type AssessmentItem = Quiz | LabAssignment;


export function calculateGrade(item: AssessmentItem): number {
switch (item.kind) {

case "quiz":
return Math.round((item.correctAnswers / item.totalQuestions) * 100);

case "lab":
return Math.round(item.functionalityScore * 0.7 + item.codeQualityScore * 0.3);

}
}
const quiz: AssessmentItem = {
id: "QUIZ-001",
kind: "quiz",
title: "SQL Basics",
correctAnswers: 80,
totalQuestions: 90,
};
const lab: AssessmentItem = {
id: "LAB-001",
kind: "lab",
title: "REST API Project",
functionalityScore: 85,
codeQualityScore: 90,
};
