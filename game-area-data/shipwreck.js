export const shipwreckData =
  {
    id: "shipwreck",
    title: "Malware Wreckage",
    slides: [
        {
            id: "slide1",
            title: "What is Malware?",
            content: "Malware is short for 'malicious software.' It is designed to harm, exploit, or steal information from devices and networks. Common types include viruses, worms, ransomware, and spyware.",
            image: "malware_intro.png",
        },
        {
            id: "slide2",
            title: "How Does Malware Spread?",
            content: "Malware spreads through email attachments, infected websites, fake software downloads, and even compromised USB drives. Be cautious of unexpected files and links.",
            image: "malware_spread.png",
        },
        {
            id: "slide3",
            title: "Signs of a Malware Infection",
            content: "Signs include slow performance, unexpected pop-ups, files disappearing, or new software you didn’t install. If you notice these, your device may be infected.",
            image: "malware_signs.png",
        },
        {
            id: "slide4",
            title: "Preventing Malware Infections",
            content: "Use antivirus software, keep systems updated, avoid clicking on suspicious links, and only download files from trusted sources.",
            image: "malware_prevention.png",
        },
        {
            id: "slide5",
            title: "What to Do if You Suspect Malware",
            content: "Disconnect from the internet, run a malware scan, and avoid entering sensitive information until the issue is resolved. If needed, seek professional help.",
            image: "malware_response.png",
        },
    ],
    quiz: {
      question: "Which action is the most effective in preventing malware infections?",
      image: "malware_quiz.png",
      choices: [
          { text: "Opening unexpected email attachments", correct: false },
          { text: "Keeping your software updated", correct: true },
          { text: "Clicking on pop-ups to win prizes", correct: false },
          { text: "Ignoring antivirus software warnings", correct: false },
      ],
    },
    conclusion: {
        title: "You’ve Completed Malware Basics!",
        content: "Well done! You’ve learned how to identify and prevent malware attacks. By staying informed and cautious, you can keep your devices and data secure. Keep practicing safe cybersecurity habits!",
        image: "malware_conclusion.png",
    },
}

