export const volcanoData = 
{
  id: "volcano",
  title: "Vishing Attacks",
  slides: [
      {
          id: "slide1",
          title: "What is Vishing?",
          content: "Vishing, or voice phishing, is a type of scam where attackers use phone calls or voice messages to trick you into sharing sensitive information, such as passwords or financial details.",
          image: "vishing_intro.png",
      },
      {
          id: "slide2",
          title: "Common Vishing Tactics",
          content: "Attackers often impersonate trusted entities, such as banks, government agencies, or tech support. They may create a sense of urgency to pressure you into providing information.",
          image: "vishing_tactics.png",
      },
      {
          id: "slide3",
          title: "AI-Spoofed Vishing Attacks",
          content: "Some attackers now use AI to mimic voices of people you know or trusted officials. These calls may sound highly convincing and realistic, making it even more critical to verify the source.",
          image: "ai_vishing.png",
      },
      {
          id: "slide4",
          title: "Recognizing Vishing Attempts",
          content: "Be cautious of calls asking for personal information, especially if the caller claims you need to act immediately. Legitimate organizations rarely ask for sensitive details over the phone.",
          image: "recognize_vishing.png",
      },
      {
          id: "slide5",
          title: "Protecting Yourself from Vishing",
          content: "Never share sensitive information over the phone unless you initiated the call to a verified number. Use call-blocking tools, report suspicious calls, and educate yourself about these tactics.",
          image: "vishing_protection.png",
      },
      {
          id: "slide6",
          title: "What to Do If You’re Targeted",
          content: "If you suspect a vishing attempt, hang up immediately. Verify the caller’s claims by contacting the organization directly using official channels. Report the incident to the appropriate authorities.",
          image: "vishing_response.png",
      },
  ],
  quiz: {
      question: "What is the safest action if you receive a suspicious call asking for sensitive information?",
      image: "vishing_quiz.png",
      choices: [
          { text: "Provide the requested information to avoid trouble", correct: false },
          { text: "Hang up and verify the caller’s identity through official channels", correct: true },
          { text: "Keep talking to gather as much information as possible", correct: false },
          { text: "Ignore the call and block the number", correct: false },
      ],
  },
  conclusion: {
      title: "You’ve Completed Vishing Basics!",
      content: "Great job learning about vishing attacks and how to protect yourself. By staying cautious and verifying suspicious calls, you can avoid falling victim to these scams. Keep practicing good cybersecurity habits!",
      image: "vishing_conclusion.png",
  },
}
