# 💧 Water Tracker

A beautiful, animated water intake tracker to help you stay hydrated throughout the day.

![Water Tracker Preview](https://img.shields.io/badge/status-active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Features

- **Visual Progress Tracking** - Animated jug fills as you drink water
- **Smart Notifications** - Customizable reminders to stay hydrated
- **Daily Goal Setting** - Set and track your personalized water intake goal
- **Data Persistence** - Your progress is automatically saved
- **Achievement System** - Celebrate when you reach your daily goal
- **Responsive Design** - Works perfectly on desktop and mobile
- **Midnight Auto-Reset** - Automatically starts fresh each day

## 🚀 Live Demo

Visit the live app: [https://SmritiUofA.github.io/water-tracker/](https://SmritiUofA.github.io/water-tracker/)

## 📁 Project Structure

```
water-tracker/
│
├── index.html          # Main HTML structure
├── css/
│   └── style.css      # All styling and animations
├── js/
│   └── app.js         # Application logic
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup for better structure
- **CSS3** - Modern styling with gradients, animations, and flexbox
- **Vanilla JavaScript** - No frameworks, pure JS for maximum performance
- **LocalStorage API** - Client-side data persistence
- **Notifications API** - Browser notifications for reminders

## 💻 Installation & Setup

### Option 1: Direct Use
Simply open `index.html` in any modern web browser!

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Then visit: http://localhost:8000
```

### Option 3: Deploy to GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** maintaining the folder structure
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: main
   - Click Save
4. **Visit your site** at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

## 📖 How to Use

1. **Set Your Goal** - Adjust your daily water intake goal in settings
2. **Log Water** - Click buttons to add water intake (250ml, 500ml, 750ml)
3. **Watch Progress** - See the animated jug fill up
4. **Enable Notifications** - Get reminders at your preferred intervals
5. **Track Daily** - Your progress resets automatically at midnight

## 🎨 Customization

### Changing Colors
Edit `css/style.css` and modify the gradient colors:

```css
/* Main background gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Water color */
background: linear-gradient(to top, #3b82f6 0%, #60a5fa 100%);
```

### Changing Default Goal
Edit `js/app.js`:

```javascript
let dailyGoal = 2000; // Change to your preferred default (in ml)
```

### Adding Custom Water Amounts
Edit `index.html`:

```html
<button class="add-btn" onclick="addWater(1000)">
    + 1L
</button>
```

## 🔧 Code Organization

### HTML (`index.html`)
- Semantic HTML5 structure
- Accessibility features (ARIA labels)
- Separate sections for different components

### CSS (`css/style.css`)
- Organized by component sections
- CSS custom properties for easy theming
- Responsive media queries
- Animation keyframes

### JavaScript (`js/app.js`)
- Modular function organization
- JSDoc comments for documentation
- Event-driven architecture
- LocalStorage for data persistence

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Notifications require user permission

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Weekly/Monthly statistics dashboard
- [ ] Multiple drink types (coffee, tea, juice)
- [ ] Export data as CSV
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) support
- [ ] Social sharing features
- [ ] Integration with fitness trackers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Smriti Hari**
- GitHub: [@SmritiUofA](https://github.com/SmritiUofA)
- LinkedIn: [Smriti Hari](https://www.linkedin.com/in/smriti-hari-b69b20252/)

## 🙏 Acknowledgments

- Inspired by the importance of daily hydration
- Icons from emoji standard
- Color palette inspired by modern web design trends

---

**Stay Hydrated! 💧**

If you found this project helpful, please give it a ⭐!
