let paragraphs = [
      "The serene beauty of nature offers a peaceful retreat from our busy lives. From the vibrant colors of blooming flowers to the calming sound of a flowing river, nature has a unique way of refreshing the human spirit. It reminds us to pause and appreciate the simple things around us.",
      "Education is a vital key to unlocking endless opportunities. It empowers individuals with knowledge and skills, enabling them to make informed decisions and contribute positively to society. With a solid education, people can overcome challenges, innovate, and create a better future for themselves and others.",
      "Technology is constantly evolving, transforming how we live, work, and communicate. From smartphones to artificial intelligence, technological advancements continue to make our lives more efficient and interconnected. Staying updated with the latest trends and developments is crucial in today’s fast-paced world.",
      "Healthy eating is essential for maintaining physical and mental well-being. A balanced diet provides the body with the necessary nutrients to function properly, boosts energy levels, and supports the immune system. Incorporating fruits, vegetables, whole grains, and lean proteins into meals is a great way to stay healthy.",
      "Reading books is a wonderful way to expand knowledge and imagination. It allows readers to explore new worlds, gain different perspectives, and learn from the experiences of others. Whether fiction or non-fiction, books have the power to inspire, educate, and entertain.",
      "Exercising regularly has numerous health benefits. It helps improve cardiovascular health, strengthens muscles, enhances flexibility, and boosts mood. Engaging in activities like jogging, yoga, or dancing can significantly impact physical and mental health, contributing to a happier and more active lifestyle.",
      "Traveling opens the door to new cultures, experiences, and adventures. It offers a chance to see the world from different viewpoints, meet new people, and learn about diverse traditions. Traveling can be an enriching experience that broadens the mind and enriches the soul.",
      "Mindfulness is the practice of being fully present in the moment. It helps reduce stress, enhance concentration, and promote a sense of inner peace. By practicing mindfulness techniques like meditation and deep breathing, individuals can improve their mental and emotional well-being.",
      "Friendship is a valuable treasure in life. True friends provide support, encouragement, and companionship, making life’s journey more enjoyable. They offer a shoulder to lean on during difficult times and share in the joy of successes. Nurturing friendships is essential for a happy and fulfilling life.",
      "Learning a new language can be a rewarding experience. It opens up new opportunities for communication, travel, and cultural understanding. Language learning also enhances cognitive skills, improves memory, and fosters empathy by exposing learners to different cultures and ways of thinking.",
      "Art is a powerful form of expression. Through various mediums like painting, sculpture, music, and dance, artists convey their emotions, thoughts, and ideas. Art has the ability to inspire, provoke, and bring people together, transcending language and cultural barriers.",
      "The importance of sleep cannot be overstated. Adequate rest is essential for physical health, mental clarity, and emotional balance. Good sleep hygiene, including a regular sleep schedule and a comfortable sleeping environment, can enhance overall well-being and productivity.",
      "Volunteering is a meaningful way to give back to the community. It allows individuals to make a positive impact, gain new skills, and build connections. Whether it’s helping at a local shelter or organizing a community event, volunteering fosters a sense of purpose and fulfillment.",
      "Music has a universal appeal that transcends language and culture. It has the power to evoke emotions, create memories, and bring people together. From classical symphonies to modern pop songs, music enriches our lives and provides a soundtrack to our experiences.",
      "Gardening is a therapeutic activity that connects people with nature. It provides a sense of accomplishment as plants grow and flourish under one’s care. Gardening also promotes physical activity, reduces stress, and enhances mental well-being, making it a fulfilling hobby for all ages.",
      "Creativity is a vital skill that drives innovation and problem-solving. It encourages thinking outside the box and finding new solutions to challenges. Whether through writing, designing, or inventing, creativity empowers individuals to express themselves and contribute meaningfully to society.",
      "Sustainable living is essential for protecting the planet. It involves making conscious choices like reducing waste, conserving energy, and using eco-friendly products. By adopting sustainable practices, individuals can help preserve natural resources and promote a healthier environment for future generations.",
      "Sports and physical activities play a crucial role in maintaining a healthy lifestyle. They enhance cardiovascular health, improve strength and flexibility, and foster teamwork and discipline. Engaging in regular sports activities can boost confidence and provide a sense of achievement.",
      "Cooking at home can be a fun and rewarding experience. It allows for creativity in the kitchen, offers control over ingredients, and promotes healthier eating habits. Sharing a home-cooked meal with loved ones can also strengthen bonds and create lasting memories.",
      "Confidence is the key to success in many areas of life. It helps individuals face challenges, take risks, and seize opportunities. Building confidence involves recognizing one's strengths, embracing growth, and maintaining a positive mindset, which can lead to personal and professional achievements.",
      "Patience is an important virtue in navigating life's ups and downs. It enables individuals to stay calm and composed in challenging situations, fostering resilience and perseverance. Practicing patience helps build stronger relationships, reduce stress, and achieve long-term goals.",
      "Adopting a pet can bring immense joy and companionship to one’s life. Pets provide unconditional love, encourage regular exercise, and help reduce stress and anxiety. Whether it’s a dog, cat, or another animal, a pet can become a cherished member of the family.",
      "Innovation is the driving force behind progress. It involves creating new ideas, products, or processes that improve efficiency and solve problems. Embracing innovation in various fields, from technology to healthcare, leads to advancements that benefit society as a whole.",
      "Public speaking is an essential skill in both personal and professional settings. It enhances communication, builds confidence, and helps convey ideas effectively. Practicing public speaking can lead to better career opportunities, improved leadership skills, and a greater impact on others.",
      "Time management is crucial for achieving goals and maintaining a healthy work-life balance. It involves prioritizing tasks, setting realistic deadlines, and avoiding procrastination. Effective time management leads to increased productivity, reduced stress, and a more fulfilling life.",
      "Positive thinking can transform one's outlook on life. It involves focusing on the good in every situation, fostering resilience and motivation. By cultivating a positive mindset, individuals can enhance their mental health, build stronger relationships, and achieve greater success.",
      "Mindful eating involves paying attention to the food we consume, savoring each bite, and recognizing hunger and fullness cues. It promotes a healthier relationship with food, encourages balanced nutrition, and reduces overeating. Practicing mindful eating leads to improved well-being.",
      "Communication is key to building strong relationships. It involves active listening, empathy, and clarity in expressing thoughts and feelings. Good communication skills help resolve conflicts, foster understanding, and create meaningful connections in both personal and professional settings.",
      "Meditation is a powerful tool for reducing stress and enhancing mental clarity. It involves focusing the mind and calming the body through techniques like deep breathing and visualization. Regular meditation practice can improve emotional balance, increase self-awareness, and promote overall well-being.",
      "Adaptability is a valuable trait in today’s ever-changing world. It involves being open to new experiences, embracing change, and learning from challenges. Adaptable individuals are more resilient, better equipped to handle uncertainty, and capable of thriving in diverse environments.",
      "Financial literacy is essential for making informed money decisions. It involves understanding budgeting, saving, investing, and managing debt. Building financial literacy helps individuals achieve financial stability, plan for the future, and navigate complex economic landscapes with confidence.",
      "Teamwork is vital for achieving common goals. It involves collaborating, sharing ideas, and supporting one another. Effective teamwork fosters creativity, improves problem-solving, and builds a sense of community. In both professional and personal settings, working well with others is key to success.",
      "Writing is a powerful form of communication. It allows individuals to express thoughts, share ideas, and connect with others. Whether through essays, stories, or blogs, writing can be therapeutic and insightful, offering a platform for reflection and creativity.",
      "Healthy habits form the foundation of a balanced life. Incorporating daily routines like regular exercise, balanced eating, and adequate sleep contributes to overall well-being. Building and maintaining healthy habits promotes a longer, happier life, filled with energy and vitality.",
      "The environment needs our protection. Pollution, deforestation, and climate change pose significant threats to our planet. By reducing waste, recycling, and supporting sustainable practices, individuals can help protect the Earth’s ecosystems and ensure a greener future for generations to come.",
      "Learning from mistakes is an essential part of growth. Mistakes provide valuable lessons that help individuals improve and become more resilient. Embracing failures with a positive attitude fosters innovation, creativity, and personal development, ultimately leading to success.",
      "Digital detox is essential in today’s technology-driven world. Taking breaks from screens and digital devices can reduce eye strain, improve mental focus, and promote better sleep. Engaging in offline activities like reading, walking, or spending time with loved ones can be refreshing.",
      "Gratitude is a powerful emotion that enhances happiness and well-being. Practicing gratitude involves recognizing and appreciating the positive aspects of life. Keeping a gratitude journal, expressing thanks to others, and focusing on the good can lead to a more joyful and content life.",
      "Emotional intelligence is key to personal and professional success. It involves understanding and managing one’s emotions and empathizing with others. High emotional intelligence fosters better communication, stronger relationships, and improved conflict resolution, contributing to a more harmonious life.",
      "A growth mindset is essential for personal development. It involves believing in one’s ability to learn, adapt, and overcome challenges. Embracing a growth mindset encourages continuous learning, resilience, and a positive attitude toward change and self-improvement.",
      "Self-care is vital for maintaining overall well-being. It involves taking time to relax, recharge, and prioritize one’s needs. Whether through exercise, hobbies, or meditation, self-care helps reduce stress, improve mental health, and foster a more balanced and fulfilling life.",
      "Effective leadership involves inspiring, guiding, and supporting others. Good leaders listen actively, communicate clearly, and empower their teams. Leadership is not just about managing tasks but also about fostering growth, innovation, and a positive environment.",
      "Empathy is crucial for building meaningful connections. It involves understanding and sharing the feelings of others, which fosters compassion and kindness. Practicing empathy leads to stronger relationships, better communication, and a more harmonious society.",
      "Digital skills are becoming increasingly important in the modern world. Proficiency in tools like coding, data analysis, and online communication is essential for personal and professional growth. Investing in digital literacy opens up new opportunities and enhances career prospects.",
      "Listening is an essential communication skill. It involves fully focusing on what the other person is saying, understanding their perspective, and responding thoughtfully. Good listening builds trust, reduces misunderstandings, and fosters stronger relationships.",
      "Hiking is a great way to explore the outdoors and stay active. It combines physical exercise with the beauty of nature, offering a refreshing break from daily routines. Hiking with friends or solo can be an enjoyable adventure that boosts both physical and mental health.",
      "Digital marketing is a powerful tool for businesses to reach their target audience. It involves using online platforms like social media, email, and websites to promote products and services. Effective digital marketing strategies can enhance brand visibility and drive growth.",
      "Climate change is a pressing global issue that requires immediate action. Rising temperatures, melting ice caps, and extreme weather events pose significant threats to life on Earth. Reducing carbon footprints, supporting renewable energy, and advocating for policy changes are crucial steps toward a sustainable future.",
      "Networking is vital for career development. It involves building and maintaining professional relationships that can lead to new opportunities, collaborations, and growth. Effective networking requires active engagement, genuine interest, and the willingness to help others.",
      "Self-discipline is key to achieving personal and professional goals. It involves maintaining focus, resisting distractions, and staying committed to one’s objectives. Cultivating self-discipline helps build resilience, enhance productivity, and lead to long-term success."
];

let typingText = document.querySelector(".typing-text");
let input = document.querySelector(".input");
let mistakesDisplay = document.querySelector(".mistake");
let wpmDisplay = document.querySelector(".wpm");
let cpmDisplay = document.querySelector(".cpm");
let btn = document.querySelector(".btn");
let timeDisplay = document.querySelector(".time");
let timesUpScreen = document.querySelector(".times-up-screen");
let timesUpBtn = document.querySelector(".times-up-btn");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let isTyping = false;
let mistake = 0;

function loadParagraph() {
      let randomIndex = Math.floor(Math.random() * paragraphs.length);
      let randomParagraph = paragraphs[randomIndex];
      typingText.innerHTML = "";

      for (const char of randomParagraph) {
            typingText.innerHTML += `<span>${char}</span>`;
      }

      typingText.querySelectorAll('span')[0].classList.add('active');

      document.addEventListener('keydown', () => {
            input.focus();
      });
      typingText.addEventListener('click', () => {
            input.focus();
      });

      clearInterval(timer);
      timeLeft = maxTime;
      timeDisplay.innerText = timeLeft;
      input.value = "";
      charIndex = 0;
      mistake = 0;
      mistakesDisplay.innerHTML = mistake;
      cpmDisplay.innerText = "00";
      wpmDisplay.innerText = "00";
}

function initTyping() {
      if (!isTyping) {
            timer = setInterval(initTime, 1000);
            isTyping = true;
      }

      const char = typingText.querySelectorAll('span');
      const typedChar = input.value.charAt(charIndex);

      if (typedChar === "") {
            if (charIndex > 0) {
                  charIndex--;
                  char[charIndex].classList.remove('correct', 'incorrect');
                  char[charIndex].classList.add('active');
                  char[charIndex + 1].classList.remove('active');
            }
      } else {
            if (charIndex < char.length && timeLeft > 0) {
                  if (char[charIndex].innerText === typedChar) {
                        char[charIndex].classList.add('correct');
                  } else {
                        char[charIndex].classList.add('incorrect');
                        mistake++;
                  }

                  charIndex++;
                  if (charIndex < char.length) {
                        char[charIndex].classList.add('active');
                  }
                  mistakesDisplay.innerHTML = mistake;
            } else {
                  clearInterval(timer);
                  input.value = "";
            }
      }

      updateCPM();
}

function updateCPM() {
      const elapsedMinutes = (maxTime - timeLeft) / 60;
      const cpm = Math.round(charIndex / elapsedMinutes);
      cpmDisplay.innerText = cpm;
}

function initTime() {
      let wpm = 0;
      if (timeLeft > 0) {
            timeLeft--;
            timeDisplay.innerText = timeLeft;

            if (timeLeft < maxTime) {
                  wpm = Math.round(((charIndex - mistake) / 5) / ((maxTime - timeLeft) / 60));
            }
            wpmDisplay.innerText = wpm;
      } else {
            clearInterval(timer);
            input.setAttribute('disabled', 'true');
            input.value = "";
            typingText.innerText = "";
            timesUpScreen.style.visibility = "visible";
      }
}

input.addEventListener('input', initTyping);
btn.addEventListener('click', () => {
      clearInterval(timer); 
      loadParagraph(); 
      input.removeAttribute('disabled'); 
      isTyping = false; 
  });

timesUpBtn.addEventListener('click',()=>{
      timesUpScreen.style.visibility = "hidden";
})

loadParagraph();