let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {

    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
console.log(prog200courseDate);
// When does the PROG200 course start?

// function IsProg200(course){
//     return course.CourseId == "PROG200";
// }


// let prog200course = courses.find(IsProg200);

// let prog200course = courses.find(function(course){
//     return course.CourseId == "PROG200";
// });

let prog200courseDate = courses.find( (course) => course.CourseId == "PROG200").StartDate;



console.log(prog200courseDate);



// What is the title of the PROJ500 course?
console.log(" What is the title of the PROJ500 course?")
console.log(courses.find((course) => course.CourseId == "PROJ500").Title);


// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?
   