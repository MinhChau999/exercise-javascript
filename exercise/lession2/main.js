
// var courses = [
//     {
//         id: 1,
//         name: "JavaScript",
//         coin: 100,
//     },
//     {
//         id: 2,
//         name: "PHP",
//         coin: 200,
//     },
//     {
//         id: 3,
//         name: "Python",
//         coin: 300,
//     },
// ];

// function courseHandler(courses, index){
//     return {
//         id: courses.id,
//         name: `Khoa hoc: ${courses.name}`,
//         coin: courses.coin,
//         coinText: `Gia: ${courses.coin}`,
//         index: index,
//     }
// }

// var newCourses = courses.map(courseHandler);
// console.log(newCourses);

// function courseHandler1(courses){
//     return `<p>${courses.name}: ${courses.coin}</p>`;
// }
// var newCourses1 = courses.map(courseHandler1);
// console.log(newCourses1);
// newCourses1.forEach(function(course){
//     // document.write(course);
// })

// // Reduce method

// // var totalCoin = courses.reduce(function courseHandler2(accumulator, crrentValue){
// //     return accumulator + crrentValue.coin
// // }, 0);
// // console.log(totalCoin);

// var totalCoin = courses.reduce(function(total, course){
//     return total + course.coin;
// }, 0);
// console.log(totalCoin);

// Bài tập 1
var depthArray = [1,2,[3,4,5,6], [7,8],[9,10,11]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// Bài tập 2
var topics = [
    {
        topic: "Front-end",
        courses : [
            {
                id: 1,
                name: "HTML",
                coin: 100,
            },
            {
                id: 2,
                name: "CSS",
                coin: 200,
            }]
    },
    {
        topic: "Back-end",
        courses : [
            {
                id: 3,
                name: "PHP",
                coin: 300,
            },
            {
                id: 4,
                name: "JavaScript",
                coin: 400,
            }]
    }
];
var newCourses2 = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);
},[]);


var htmls = newCourses2.map(function(course){
    return `
        <div>
            <h3>${course.name}</h3>
            <p>${course.coin}</p>
        </div>
    `;
});
console.log(htmls);
htmls.forEach(function(html){
    document.write(html);
});

// method includes
var title = "Hello World";
var result = title.includes("World");
console.log(result);