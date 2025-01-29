const botnetbay = 
{
  id: "botnetbay",
  title: "Dangers of IoT Devices",
  slides: [
      {
          id: "slide1",
          title: "What Are IoT Devices?",
          content: "IoT devices are everyday objects connected to the internet, such as smart speakers, thermostats, cameras, and appliances. They bring convenience but also pose security risks.",
          image: "iot_intro.png",
      },
      {
          id: "slide2",
          title: "How IoT Devices Spy on Your Network",
          content: "Some IoT devices collect and share data about your habits, devices, or network traffic. Poorly secured devices can also be exploited by hackers to spy on your activities.",
          image: "iot_spying.png",
      },
      {
          id: "slide3",
          title: "Insecure IoT Devices as Backdoors",
          content: "Weak passwords, outdated firmware, or lack of security features can make IoT devices a target. Once compromised, hackers can access your home network, including work-from-home devices.",
          image: "iot_backdoors.png",
      },
      {
          id: "slide4",
          title: "Best Practices for Using IoT Devices",
          content: "Set up IoT devices on a separate Wi-Fi network to isolate them from critical devices. Use strong, unique passwords and enable automatic updates to keep the firmware secure.",
          image: "iot_best_practices.png",
      },
      {
          id: "slide5",
          title: "Securing Work-from-Home Devices",
          content: "Ensure work devices are connected to a secure network, not the IoT network. Avoid accessing sensitive work data from personal or shared devices to minimize risks.",
          image: "iot_work_devices.png",
      },
      {
          id: "slide6",
          title: "What to Do if Your IoT Device is Compromised",
          content: "Disconnect compromised devices immediately. Reset them to factory settings, update the firmware, and change all passwords. Monitor your network for unusual activity.",
          image: "iot_response.png",
      },
  ],
  quiz: {
      question: "What is the safest way to use IoT devices in your home?",
      image: "iot_quiz.png",
      choices: [
          { text: "Connect IoT devices to the same network as work devices", correct: false },
          { text: "Use a separate Wi-Fi network for IoT devices", correct: true },
          { text: "Ignore firmware updates to save time", correct: false },
          { text: "Use default passwords for convenience", correct: false },
      ],
  },
  conclusion: {
      title: "You’ve Completed IoT Device Basics!",
      content: "Great job learning about IoT device risks and best practices! By using a separate network, enabling updates, and securing your devices, you can protect your home and work data. Stay secure and IoT smart!",
      image: "iot_conclusion.png",
  },
}
