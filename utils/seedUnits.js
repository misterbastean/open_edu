module.exports = [
  {
    owner: "josh", // Change to user relationship
    dateCreated: new Date(),
    title: "Macbeth",
    description: "A unit on Macbeth.",
    grades: ["9", "10", "11", "12"],
    subject: "ELA",
    standards: ["1.2", "2.3", "4.5"],
    stars: ["user1", "user2"],
    comments: ["Great job!", "Looks cool"], // Change to comment relationship
    pendingMerges: ["12345", "asdf", "qwer"], // Change to merge relationship
    acceptedMerges: ["zxcv"], // Change to merge relationship
    rejectedMerges: [{
      merge: "4567", // Change to merge relationship
      message: "Do better"
    }],
    lastUpdated: new Date("2020-01-01T10:20:30Z"),
    includedResources: []
  },
  {
    owner: "misterbastean", // Change to user relationship
    dateCreated: new Date(),
    title: "Goldfish",
    description: "A unit on 'What, of this Goldfish, do you Wish?'.",
    grades: ["9"],
    subject: "ELA",
    standards: ["1.3", "2.2", "4.1"],
    stars: ["user1", "user2", "user3"],
    comments: ["Stupid story", "Very strange"], // Change to comment relationship
    pendingMerges: ["dfghdfg", "yumrtu", "sv34tgrt"], // Change to merge relationship
    acceptedMerges: ["yumry"], // Change to merge relationship
    rejectedMerges: [{
      merge: "ebr6u6reb", // Change to merge relationship
      message: "Quit trying to delete..."
    }],
    lastUpdated: new Date("2020-02-02T12:00:30Z"),
    includedResources: []
  },
  {
    owner: "testuser", // Change to user relationship
    dateCreated: new Date(),
    title: "Poetry",
    description: "A unit on poetry.",
    grades: ["9", "10", "11", "12"],
    subject: "ELA",
    standards: ["3.3", "4.2", "6.1"],
    stars: ["user4"],
    comments: ["Spoken word part is cool.", "Get rid of Chaucer."], // Change to comment relationship
    pendingMerges: ["sgsgsdfgbsdfb", "e56he56", "uklhjkg"], // Change to merge relationship
    acceptedMerges: ["w3wc5w45c"], // Change to merge relationship
    rejectedMerges: [{
      merge: "7t8itont", // Change to merge relationship
      message: "Find better source."
    }],
    lastUpdated: new Date("2020-03-03T02:50:30Z"),
    includedResources: []
  }
]
