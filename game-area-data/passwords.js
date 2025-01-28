const passwords = {
  id: "passwords",
  title: "Passwords & Passphrases",
  slides: [
      {
          id: "slide1",
          title: "Why Strong Passwords Matter",
          content: "Passwords are your first line of defense against cyberattacks. Weak passwords are easy to guess and can put your accounts and sensitive information at risk.",
          image: "password_importance.png",
      },
      {
          id: "slide2",
          title: "Passwords vs. Passphrases",
          content: "A password is typically a short, random string of characters. A passphrase, however, is longer and often made up of multiple words, making it easier to remember and harder to crack (e.g., 'BlueOcean#Skyline!2025').",
          image: "password_vs_passphrase.png",
      },
      {
          id: "slide3",
          title: "The Role of Password Managers",
          content: "Password managers securely store all your complex passwords in one place. You only need to remember one master password, and the manager will handle the rest.",
          image: "password_manager.png",
      },
      {
          id: "slide4",
          title: "Creating Strong Passwords",
          content: "A strong password or passphrase should be at least 12 characters long, include upper and lowercase letters, numbers, and symbols. Avoid using common words, names, or dates.",
          image: "strong_passwords.png",
      },
      {
          id: "slide5",
          title: "Tips for Managing Passwords",
          content: "Don’t reuse passwords across accounts. Enable multi-factor authentication (MFA) for an extra layer of security wherever possible.",
          image: "password_tips.png",
      },
  ],
  quiz: {
      question: "What is the best way to manage your passwords securely?",
      image: "password_quiz.png",
      choices: [
          { text: "Use the same password for all accounts", correct: false },
          { text: "Write down passwords on a piece of paper", correct: false },
          { text: "Use a password manager to store unique, complex passwords", correct: true },
          { text: "Share your passwords with a trusted friend for safekeeping", correct: false },
      ],
  },
  conclusion: {
      title: "You’ve Completed Password Basics!",
      content: "Great job learning about passwords and passphrases! By using strong passwords, enabling MFA, and leveraging a password manager, you’re taking important steps to protect your digital life. Stay secure and keep practicing good password habits!",
      image: "password_conclusion.png",
  },
}
