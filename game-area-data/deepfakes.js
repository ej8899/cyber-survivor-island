const deepfakes = 
{
  id: "deepfakes",
  title: "Dangers of AI & Deepfakes",
  slides: [
      {
          id: "slide1",
          title: "What Are Deepfakes?",
          content: "Deepfakes are AI-generated videos, images, or audio that convincingly mimic real people. They can make it appear that someone said or did something they never actually did.",
          image: "deepfakes_intro.png",
      },
      {
          id: "slide2",
          title: "How Are Deepfakes Created?",
          content: "Deepfakes use AI techniques like machine learning to analyze and replicate a person's appearance, voice, and mannerisms. They often require existing video or audio of the target.",
          image: "creating_deepfakes.png",
      },
      {
          id: "slide3",
          title: "Dangers of Deepfakes",
          content: "Deepfakes can be used to spread misinformation, damage reputations, conduct scams, and impersonate individuals in fraudulent activities like vishing or extortion.",
          image: "dangers_deepfakes.png",
      },
      {
          id: "slide4",
          title: "Recognizing Deepfakes",
          content: "Look for unnatural facial movements, inconsistent lighting, or audio that doesn’t match lip movements. Deepfakes often have small, subtle flaws that give them away.",
          image: "recognize_deepfakes.png",
      },
      {
          id: "slide5",
          title: "Protecting Yourself from Deepfake Scams",
          content: "Be cautious of unsolicited videos or audio messages. Verify the source through independent channels, especially if money or sensitive information is requested.",
          image: "protect_from_deepfakes.png",
      },
      {
          id: "slide6",
          title: "The Role of AI in Cybersecurity",
          content: "While deepfakes pose a threat, AI is also being used to detect and combat them. Stay updated on tools and resources to identify AI-generated media.",
          image: "ai_in_cybersecurity.png",
      },
  ],
  quiz: {
      question: "What is the best way to protect yourself from a deepfake scam?",
      image: "deepfake_quiz.png",
      choices: [
          { text: "Trust every video or audio message you receive", correct: false },
          { text: "Verify the source through independent channels", correct: true },
          { text: "Ignore signs like unnatural movements or mismatched audio", correct: false },
          { text: "Assume all media online is authentic", correct: false },
      ],
  },
  conclusion: {
      title: "You’ve Completed AI & Deepfake Basics!",
      content: "Great job learning about the dangers of AI and deepfakes! By staying cautious, verifying sources, and keeping up with detection tools, you can protect yourself from these emerging threats. Stay informed and vigilant!",
      image: "deepfake_conclusion.png",
  },
}
