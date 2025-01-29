const botnetbay = 
{
  id: "botnetbay",
  title: "Dangers of IoT Devices & Botnets",
  slides: [
      {
          id: "slide1",
          title: "What Are IoT Devices?",
          content: "IoT (Internet of Things) devices are everyday objects connected to the internet, such as smart speakers, cameras, thermostats, and home appliances. While they add convenience, they can also pose serious security risks.",
          image: "iot_intro.png",
      },
      {
          id: "slide2",
          title: "How IoT Devices Spy on Your Network",
          content: "Some IoT devices collect and share data about your habits, location, and network traffic. Weak security settings can allow attackers to spy on your home and work-from-home devices.",
          image: "iot_spying.png",
      },
      {
          id: "slide3",
          title: "Insecure IoT Devices as Backdoors",
          content: "IoT devices with weak passwords or outdated software can serve as entry points for hackers. Once compromised, attackers can access other devices on your home network, including work-from-home systems.",
          image: "iot_backdoors.png",
      },
      {
          id: "slide4",
          title: "IoT Devices & Botnet Attacks (Welcome to Botnet Bay!)",
          content: "Hackers use insecure IoT devices to build botnets—a network of infected devices controlled remotely to launch massive cyberattacks. Botnets can be used for DDoS attacks, spreading malware, or even stealing data.",
          image: "iot_botnet.png",
      },
      {
          id: "slide5",
          title: "Real-World Example: The Mirai Botnet",
          content: "One of the most infamous botnets, Mirai, infected thousands of IoT devices like cameras and routers. It was used to take down major websites and services by overwhelming them with traffic.",
          image: "mirai_botnet.png",
      },
      {
          id: "slide6",
          title: "Best Practices for Securing IoT Devices",
          content: "Use a separate Wi-Fi network for IoT devices, change default passwords, enable automatic updates, and disable unnecessary features like remote access to prevent them from being hijacked into a botnet.",
          image: "iot_best_practices.png",
      },
      {
          id: "slide7",
          title: "What to Do if Your IoT Device is Compromised",
          content: "Disconnect the device from the network, reset it to factory settings, update the firmware, and change passwords. Monitor your network for unusual activity and report suspicious behavior.",
          image: "iot_response.png",
      },
  ],
  quiz: {
      question: "How can IoT devices be used in botnet attacks?",
      image: "iot_quiz.png",
      choices: [
          { text: "By collecting too much data from their users", correct: false },
          { text: "By being hacked and controlled remotely to launch cyberattacks", correct: true },
          { text: "By automatically updating themselves", correct: false },
          { text: "By blocking internet access when too many are connected", correct: false },
      ],
  },
  conclusion: {
      title: "You’ve Completed IoT & Botnet Basics!",
      content: "Great job learning about IoT security and botnets! By securing your smart devices, you help prevent cybercriminals from using them in attacks like those in Botnet Bay. Stay alert and keep your network safe!",
      image: "iot_conclusion.png",
  },
}
