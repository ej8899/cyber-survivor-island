const gameAreas = [
  {
    id: "phishing",
    title: "Phishing Basics",
    slides: [
      {
        id: "slide1",
        title: "Introduction to Phishing",
        content: "Phishing is a type of cyberattack...",
        image: "phishing_intro.png",
      },
      {
        id: "slide2",
        title: "Recognizing Phishing Emails",
        content: "Look out for suspicious links...",
        image: "phishing_email.png",
      },
    ],
    quiz: {
      question: "Which is the safest action to take with a suspicious email?",
      image: "quiz_image.png",
      choices: [
        { text: "Click the link to verify", correct: false },
        { text: "Delete the email immediately", correct: true },
      ],
    },
    conclusion: {
      title: "You’ve Completed Phishing Basics!",
      content: "Great job learning about phishing attacks...",
      image: "conclusion.png",
    },
  },
  // Additional game areas...
];

