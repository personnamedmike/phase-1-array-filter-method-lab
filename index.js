// Code your solution here
function findMatching(arr, name) {
  return arr.filter((el) => el.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(arr, str) {
  return arr.filter((i) => {
    return i.substring(0, 2).includes(str);
  });
}

function matchName(arr, name) {
  return arr.filter((i) => i.name === name);
}

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

console.log(matchName(drivers, "Bobby"));
