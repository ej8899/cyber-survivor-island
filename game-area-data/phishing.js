export const phishingData = 
{
  id: "phishing",
  title: "Phishing Basics",
  slides: [
      {
          id: "slide1",
          title: "What is Phishing?",
          content: "Phishing is a type of cyberattack where attackers try to trick you into sharing sensitive information, such as passwords or credit card numbers, by pretending to be a trustworthy entity.",
          image: "phishing_intro.png",
      },
      {
          id: "slide2",
          title: "Common Phishing Tactics",
          content: "Phishing emails often create a sense of urgency or fear, like 'Your account will be locked!' or 'You’ve won a prize!' They may also use fake but professional-looking logos and email addresses.",
          image: "phishing_tactics.png",
      },
      {
          id: "slide3",
          title: "Recognizing Suspicious Links",
          content: "Always hover over links in emails to see where they lead. A suspicious link may look legitimate but have a slightly misspelled URL or lead to an unfamiliar website.",
          image: "phishing_links.png",
      },
      {
          id: "slide4",
          title: "Spotting Attachments in Phishing Emails",
          content: "Avoid opening attachments from unknown senders. Malware or ransomware is often hidden in files like .zip, .exe, or even .docx.",
          image: "phishing_attachments.png",
      },
      {
          id: "slide5",
          title: "What to Do if You Suspect Phishing",
          content: "If you receive a suspicious email, don’t click on links or download attachments. Report it to your IT department or email provider, and delete it immediately.",
          image: "phishing_response.png",
      },
  ],
  quiz: {
      question: "Which of these actions is NOT recommended when dealing with a suspicious email?",
      image: "phishing_quiz.png",
      choices: [
          { text: "Report it to your IT department", correct: false },
          { text: "Open the attachment to check its content", correct: true },
          { text: "Hover over links to check the URL", correct: false },
          { text: "Delete the email if it seems suspicious", correct: false },
      ],
  },
  conclusion: {
      title: "You’ve Completed Phishing Basics!",
      content: "Great job learning about phishing attacks! By recognizing the signs of phishing and knowing how to respond, you’re taking a big step towards protecting yourself and your organization. Stay vigilant and keep practicing good cybersecurity habits.",
      image: "phishing_conclusion.png",
  },
};

