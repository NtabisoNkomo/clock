⏰ Modern Digital & Analog Clock

A responsive and interactive clock web application built using HTML, CSS, and Vanilla JavaScript.
This project displays both a digital clock and a fully animated analog clock, updating in real time.

🚀 Features

🕒 Live Digital Clock (HH:MM:SS)

🗓 Real-time Date Display

🧭 Animated Analog Clock

🔁 12-hour / 24-hour format toggle

🌙 Dark theme modern UI

📱 Fully responsive design

⚡ Smooth second-by-second updates

🛠 Technologies Used

HTML5 – Structure

CSS3 – Styling & Animations (Flexbox, transitions)

JavaScript (ES6) – Time logic & interactivity

Google Fonts – Modern typography

📂 Project Structure
clock-project/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
└── script.js       # Clock logic and functionality
🧠 How It Works

Uses JavaScript’s Date() object to retrieve current time.

setInterval() updates the clock every second.

Analog clock hands rotate using calculated degree values:

Hour → 360° / 12

Minute → 360° / 60

Second → 360° / 60

Toggle button switches between 12-hour and 24-hour time formats dynamically.

📦 Installation & Usage

Clone the repository:

git clone https://github.com/yourusername/clock-project.git

Navigate into the folder:

cd clock-project

Open index.html in your browser.

No dependencies or installations required.

🎯 Learning Outcomes

This project demonstrates:

DOM manipulation

Time-based JavaScript functions

CSS positioning & animation

Responsive UI design

Clean project structure

🌍 Future Improvements

Light/Dark theme toggle

Timezone selector

Alarm feature

Stopwatch & countdown timer

Sound effects
