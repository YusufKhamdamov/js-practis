let numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

let personalNewsDB = {
  count : numberOfNews,
  news : {},
  actors : {},
  genres : [],
  private :false,
};

let a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?");
let b = +prompt("Unga qancha baho bergan bo'lar edingiz?")

personalNewsDB.news [a]= b;
console.log(personalNewsDB);