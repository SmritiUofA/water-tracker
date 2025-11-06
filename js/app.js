let waterIntake = 0;
let dailyGoal = 2000;
let notificationsEnabled = false;
let reminderInterval = 60;
let reminderTimer = null;

// Load saved data
function loadData() {
    const saved = JSON.parse(localStorage.getItem('waterTracker') || '{}');
    const today = new Date().toDateString();
    
    if (saved.date === today) {
        waterIntake = saved.intake || 0;
    }
    
    dailyGoal = saved.goal || 2000;
    reminderInterval = saved.reminderInterval || 60;
    
    document.getElementById('dailyGoal').value = dailyGoal;
    document.getElementById('reminderInterval').value = reminderInterval;
    
    updateDisplay();
}

function saveData() {
    const data = {
        date: new Date().toDateString(),
        intake: waterIntake,
        goal: dailyGoal,
        reminderInterval: reminderInterval
    };
    localStorage.setItem('waterTracker', JSON.stringify(data));
}

function addWater(amount) {
    const wasUnderGoal = waterIntake < dailyGoal;
    waterIntake += amount;
    updateDisplay();
    saveData();
    
    // Show achievement if goal reached
    if (wasUnderGoal && waterIntake >= dailyGoal) {
        const achievement = document.getElementById('achievement');
        achievement.style.display = 'block';
        setTimeout(() => {
            achievement.style.display = 'none';
        }, 3000);
    }
}

function updateDisplay() {
    const percentage = Math.min(100, (waterIntake / dailyGoal) * 100);
    const waterLevel = document.getElementById('waterLevel');
    
    waterLevel.style.height = percentage + '%';
    waterLevel.classList.add('filling');
    setTimeout(() => waterLevel.classList.remove('filling'), 800);
    
    waterLevel.textContent = waterIntake + ' ml';
    
    document.getElementById('current').textContent = waterIntake;
    document.getElementById('goal').textContent = dailyGoal;
    document.getElementById('percentage').textContent = Math.round(percentage);
}

function resetDay() {
    if (confirm('Reset today\'s water intake?')) {
        waterIntake = 0;
        updateDisplay();
        saveData();
    }
}

// Settings
document.getElementById('dailyGoal').addEventListener('change', function() {
    dailyGoal = parseInt(this.value);
    updateDisplay();
    saveData();
});

document.getElementById('reminderInterval').addEventListener('change', function() {
    reminderInterval = parseInt(this.value);
    saveData();
    if (notificationsEnabled) {
        startReminders();
    }
});

// Notifications
function enableNotifications() {
    if (!("Notification" in window)) {
        alert("This browser doesn't support notifications");
        return;
    }

    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            notificationsEnabled = true;
            document.getElementById('notificationStatus').textContent = 'Notifications: Enabled ✓';
            document.getElementById('notificationStatus').className = 'notification-status notification-enabled';
            startReminders();
        } else {
            alert("Please enable notifications in your browser settings");
        }
    });
}

function startReminders() {
    if (reminderTimer) clearInterval(reminderTimer);
    
    reminderTimer = setInterval(() => {
        if (notificationsEnabled && waterIntake < dailyGoal) {
            new Notification("💧 Water Reminder", {
                body: "Time to drink some water! Stay hydrated!",
                icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>💧</text></svg>"
            });
        }
    }, reminderInterval * 60 * 1000);
}

// Initialize
loadData();

// Reset at midnight
setInterval(() => {
    const saved = JSON.parse(localStorage.getItem('waterTracker') || '{}');
    const today = new Date().toDateString();
    if (saved.date !== today) {
        waterIntake = 0;
        updateDisplay();
        saveData();
    }
}, 60000); // Check every minute