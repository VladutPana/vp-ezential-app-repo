import {
    discord,
    facebook,
    fitness,
    instagram,
    lifestyle,
    mindfulness,
    telegram,
    twitter,
    workout,
    js,
    react,
    node,
    css,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    seabg,
    mountainbg,
    brain,
    cyberpunk,
    planetbg,
    newCheck,
    thunder,
    zen,
    whitecheck
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
      kanji:"特徴",
    },
    {
      id: "1",
      title: "Perks",
      url: "#perks",
      kanji:"特典",
    },
    {
      id: "2",
      title: "Highlights",
      url: "#what's-new",
      kanji:"目玉",
    },
    {
      id: "3",
      title: "Upcoming",
      url: "#upcoming",
      kanji:"今後",
    },
    {
      id: "4",
      title: "Gallery",
      url: "#gallery",
      kanji:"画廊",
    },
    {
      id: "5",
      title: "Pricing",
      url: "#pricing",
      kanji:"価格",
    },
    {
      id: "6",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "7",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const logos = [js, react, node, css];
  
  export const benefits = [
    {
      id: "0",
      title: "Easy to get started",
      text: "Lets users quickly adapt to the app and the programs, making it very easy to understand and navigate through them.",
      iconUrl: icon1,
      imageUrl: icon1,
    },
    {
      id: "1",
      title: "Improve daily",
      text: "The app uses an algorithm which is meant to review your data and make you progress daily without much of a change.",
      iconUrl: icon2,
      imageUrl: icon2,
    },
    {
      id: "2",
      title: "Connect with friends",
      text: "Many users are already part of this app, and you have the option to connect with your friends wherever they are.",
      iconUrl: icon3,
      imageUrl: icon3,
    },
    {
      id: "3",
      title: "Stay notified",
      text: "We also have an algorithm which sends notifications based on the tasks you have completed, making it easier to stay on track.",
      iconUrl: icon4,
      imageUrl: icon4,
    },
    {
      id: "4",
      title: "Keep the streak going",
      text: "We have implemented a streak-like feature where every day you log in, the day streak keeps increasing, and you can share it with your friends.",
      iconUrl: icon5,
      imageUrl: icon5,
    },
    {
      id: "5",
      title: "Cancel anytime",
      text: "Done with our app? Canceling the membership is very easy and practical, also there is an option to freeze the membership, maybe try it out?",
      iconUrl: icon6,
      imageUrl: icon6,
    },
  ];

  export const perksText = [
    "A healthy lifestyle is about more than just staying active or eating well—it's a holistic approach to life that nurtures both body and mind."
  ];

  export const perksText2 = [
    "Ezential is designed to be your ultimate companion on the journey to a healthier, more balanced lifestyle. "
  ];
    
  export const perksContent = [
    {
      id: "0",
      title: "Healthy lifestyle",
      text: perksText,
    },
    {
      id: "1",
      title: "Forming Habits",
    },
    {
      id: "2",
      title: "Become a better person",
    },
  ];

  export const bentoBoxText = [
    "Satiating",
    "Tasty",
    "Rich in macronutrients",
  ];
  
  export const upcoming = [
    {
      id: "0",
      title: "Meditation",
      text: "Ezential prioritizes mental wellness through guided meditation sessions designed to cultivate mindfulness and promote relaxation. With a variety of techniques and durations to choose from, users can easily integrate meditation into their daily routines, whether it’s a quick five-minute break or an extended session.",
      imageUrl: mindfulness,
    },
    {
      id: "1",
      title: "Maximazing results",
      text: "To help you achieve your health and fitness goals, Ezential is equipped with advanced tracking and analytics features that maximize your results. The app allows you to set personalized objectives tailored to your unique lifestyle and aspirations. By monitoring your progress over time, Ezential provides insights that highlight your strengths and areas for improvement, ensuring you stay motivated and engaged.",
      imageUrl: fitness,
      colorful: true,
    },
    {
      id: "2",
      title: "Workout consistency",
      text: "Consistency is key to any successful fitness routine, and Ezential makes it easier than ever to stay on track. The app offers customizable workout schedules and timely reminders that fit seamlessly into your day, ensuring you never miss a session. With a diverse library of workouts tailored to different fitness levels and preferences, you can mix things up while still building a consistent habit. Ezential’s community features also allow you to connect with others for support and motivation, fostering a sense of accountability that keeps you committed to your goals.",
      imageUrl: workout,
      colorful: true,
    },
    {
      id: "3",
      title: "Hourly Notifications",
      text: "Ezential understands the importance of nourishing your body throughout the day, which is why it includes snack-time notifications to encourage mindful eating. These reminders help you stay on top of your nutrition by prompting you to refuel with healthy options at the right moments. Whether you’re looking for quick energy boosters or balanced snacks, Ezential provides suggestions tailored to your dietary preferences and goals. By promoting healthier snacking habits, the app supports your overall wellness journey and ensures you maintain the energy needed to thrive in your daily activities. With each reminder, Ezential provides curated snack suggestions that cater to your dietary needs and goals—whether you're aiming for high-protein options, low-carb snacks, or nutrient-dense choices. The app emphasizes balanced nutrition by encouraging you to choose whole foods, fruits, nuts, and other healthy snacks that provide lasting energy without the crash associated with sugary alternatives",
      imageUrl: lifestyle,
    },
  ];
  
  export const galleryInfo= [
    {
      id:"0",
      bgImg: seabg,
      checkImg: newCheck,
      text: "Join our team around the world and be part",
      secondaryText:"of our community !",
      pricing: "10$",
      thirdText: "per users",
      fourthText: "per month"
    },
    {
      id:"1",
      bgImg: cyberpunk,
      text: "Coded using the most popular",
      secondaryText:"frameworks",
    },
    {
      id:"2",
      bgImg: mountainbg,
      checkImg: brain,
      text: "55%",
      secondaryText:"improved memory",
    },
    {
      id:"3",
      checkImg: whitecheck,
      text: "Now available for",
      secondaryText:"all users !",
    },
    {
      id:"4",
      bgImg: planetbg,
      checkImg: thunder,
      text: "99%",
      secondaryText:"Energy increased",
      thirdText: "Explore"
    },
    {
      id:"5",
      checkImg: zen,
      text: "Pay safely using your personal",
      secondaryText:"Credit Card",
    },
  ]
  
  export const pricing = [
    {
      id: "0",
      title: "Trial",
      description: "30 days free trial of our app",
      price: "0",
      features: [
        "Unlock all features and start your journey to a healthier lifestyle",
        "Full access to personalized wellness",
        "Ability to explore the app and its features without any cost",
      ],
      first:true
    },
    {
      id: "1",
      title: "Premium",
      description: "Get the best of what this app has to offer",
      price: "9.99",
      features: [
        "Unlock your full potential with our premium features ",
        "Elevate your future self by starting right now",
        "Gain access to enhanced tools, expert guidance and a supportive community",
      ],
      colorful:true,
      second:true
    },
    {
      id: "2",
      title: "Personalized",
      description: "Custom features to help you level up even further",
      price: null,
      features: [
        "1 on 1 personalized training",
        "Designed to adapt to your unique lifestyle",
        "Uniquely crafted just for you and your goals",
      ],
      third:true
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discord,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];

  export const credits =[
    {
      id: "0",
      title: "Icons by icons8",
      url: "https://icons8.com/icons",
    },
    {
      id:"1",
      title: "Logos by flaticon",
      url :"https://www.flaticon.com/",
    },
    {
      id: "2",
      title: "Illustrations by undraw",
      url: "https://undraw.co/illustrations",
    },
    {
      id: "3",
      title: "Background images by unsplash",
      url: "https://unsplash.com/",
    },
  ]