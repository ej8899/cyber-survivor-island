export const darkwebData = 
{
  id: "darkweb",
  title: "Dangers of the Dark Web",
  slides: [
      {
          id: "slide1",
          title: "What is the Dark Web?",
          content: "The dark web is a part of the internet that isn’t indexed by search engines and requires special software like Tor to access. It’s often used for privacy but is also home to illegal activities and marketplaces.",
          image: "dark_web_intro.png",
      },
      {
          id: "slide2",
          title: "How Your Information Ends Up on the Dark Web",
          content: "Hackers steal passwords, personal identifiable information (PII), and financial details from data breaches. This stolen data is then sold to the highest bidder on dark web marketplaces.",
          image: "stolen_data.png",
      },
      {
          id: "slide3",
          title: "Why This is Dangerous",
          content: "Stolen data can lead to identity theft, financial fraud, or targeted phishing attacks. Once your information is on the dark web, it can be used repeatedly for malicious purposes.",
          image: "dark_web_dangers.png",
      },
      {
          id: "slide4",
          title: "How to Monitor for Leaks",
          content: "Use tools like 'Have I Been Pwned' to check if your email or passwords have been part of a data breach. Set up alerts for any future breaches involving your accounts.",
          image: "monitor_leaks.png",
      },
      {
          id: "slide5",
          title: "Precautions to Protect Your Data",
          content: "Use unique, strong passwords for every account and store them in a password manager. Enable two-factor authentication (2FA) to secure your accounts. Regularly check and update your passwords, especially after major breaches.",
          image: "data_protection.png",
      },
      {
          id: "slide6",
          title: "Responding to a Leak",
          content: "If your information is found on the dark web, change your passwords immediately. Notify your bank or credit card company if financial details are compromised and monitor your accounts for suspicious activity.",
          image: "leak_response.png",
      },
  ],
  quiz: {
      question: "What is the best way to protect your accounts from being compromised and sold on the dark web?",
      image: "dark_web_quiz.png",
      choices: [
          { text: "Use the same password for all accounts to make them easier to remember", correct: false },
          { text: "Enable two-factor authentication and use strong, unique passwords", correct: true },
          { text: "Never check if your information has been leaked", correct: false },
          { text: "Ignore security alerts from websites and apps", correct: false },
      ],
  },
  conclusion: {
      title: "You’ve Completed Dark Web Basics!",
      content: "Great job learning about the dangers of the dark web! By using strong passwords, monitoring for leaks, and enabling 2FA, you can protect yourself from having your data sold or misused. Stay secure and stay informed!",
      image: "dark_web_conclusion.png",
  },
}
