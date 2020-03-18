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
  }
]
