module.exports = [
  {
    owner: "josh", // Change to user relationship
    dateCreated: new Date(),
    title: "Macbeth Study Guide",
    description: "This is a study guide to help students with Macbeth",
    linkUrl: "/uploads/resources/Macbeth_Study_Guide.docx",
    grades: ["9", "10", "11", "12"],
    subject: "ELA",
    standards: ["CCSS.ELA.1.2", "CCSS.ELA.3.4"],
    stars: ["user1", "user2"],
    comments: ["This is awesome!", "Great job!"], // Change to comment relationship
    pendingMerges: ["merge_12345", "merge_09876"], // Change to merge relationship
    acceptedMerges: ["merge_11111"], // Change to merge relationship
    rejectedMerges: [{
      merge: "merge_00000", // Change to merge relationship
      message: "Please fix the typos"
    }],
    lastUpdated: new Date("2020-01-01T10:20:30Z"),
    timesDownloaded: 15
  },
  {
    owner: "misterbastean", // Change to user relationship
    dateCreated: new Date(),
    title: "Argumentative Essay Rubric",
    description: "This is a rubric for a 9th-grade argumentative essay.",
    linkUrl: "/uploads/resources/Argumentative_Essay_Rubric.docx",
    grades: ["9"],
    subject: "ELA",
    standards: ["CCSS.ELA.1.1", "CCSS.ELA.2.6"],
    stars: ["user1", "user2", "josh"],
    comments: ["Very useful", "Looks good."], // Change to comment relationship
    pendingMerges: ["merge_abcde", "merge_qwerty"], // Change to merge relationship
    acceptedMerges: ["merge_77777"], // Change to merge relationship
    rejectedMerges: [{
      merge: "merge_66666", // Change to merge relationship
      message: "Not rigorous enough; enables students to get a B with minimal effort or mastery."
    }],
    lastUpdated: new Date("2020-02-02T07:30:20Z"),
    timesDownloaded: 10
  },
  {
    owner: "jkbastea", // Change to user relationship
    dateCreated: new Date(),
    title: "Shakespeare Picture",
    description: "An open-source picture of Shakespeare.",
    linkUrl: "/uploads/resources/Shakespeare.jpg",
    grades: ["9", "10", "11", "12"],
    subject: "ELA",
    standards: [],
    stars: ["user1", "user2", "josh", "misterbastean"],
    comments: ["Good picture"], // Change to comment relationship
    pendingMerges: [], // Change to merge relationship
    acceptedMerges: [], // Change to merge relationship
    rejectedMerges: [],
    lastUpdated: new Date("2020-03-03T05:12:00Z"),
    timesDownloaded: 100
  }
]
