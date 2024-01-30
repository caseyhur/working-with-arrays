var hobbies = [
  "paddleboarding",
  "skateboarding",
  "hiking",
  "surfing",
  "kayaking",
  "knitting",
];
console.log(hobbies.length);
//Add New Hobby (push)
hobbies.push("singing");
//Log out Hobby at index 2
console.log(hobbies[2]);
//Remove hobby
hobbies.pop();
console.log(hobbies);
//Splice
hobbies.splice(2, "yoga", "jogging");
console.log(hobbies);
//Shift
hobbies.shift();
console.log(hobbies);

//New Array
var goals = ["finishing this course", "being awesome", "learning more"];
var allTheThings = hobbies.concat(goals);
console.log(allTheThings);
allTheThings.indexOf("being awesome");
console.log(allTheThings);
allTheThings.splice(7, 1); //removed "be awesome"
console.log(allTheThings);

//New Variable
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});
console.log(plans);
