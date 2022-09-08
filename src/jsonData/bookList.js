import book1 from "../assets/image/book.jpg";

const booklist = [
  {
    image: book1,
    id: ["101", "102", "103", "104"],
    title: "Harry Potter",
    isbn: "43876",
    year: "2001",
    edition: "second",

    studyLine: {
      courseOne: "digital markedsføring",
      courseTwo: "salg, ledelse og markedsføring",
      courseThree: "prosjektledelse",
    },

    authorName: "J.K.Rowlings",
  },
  {
    image: book1,
    id: ["201", "202", "203", "204"],
    title: "It",
    isbn: "43876",
    year: "2019",
    edition: "fourth",

    studyLine: ["digital markedsforing"],

    authorName: "Per",
  },
  {
    image: book1,
    id: ["301", "302", "303", "304"],
    title: "C++",
    isbn: "43876",
    year: "1998",
    edition: "first",

    studyLine: ["Backend"],

    authorName: "Roy",
  },
];

export default booklist;
