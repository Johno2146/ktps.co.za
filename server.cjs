const express = require('express');
const path = require('path');
const db = require('./db.cjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint for bookings
app.post('/api/bookings', async (req, res) => {
  console.log('Received booking request:', req.body);
  const { name, email, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save to local database
    const stmt = db.prepare('INSERT INTO bookings (name, email, service, message) VALUES (?, ?, ?, ?)');
    const info = stmt.run(name, email, service, message);

    // Forward to Formspree to send email notification
    try {
      await fetch('https://formspree.io/f/mjgngpwv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, service, message })
      });
      console.log('Email notification sent via Formspree');
    } catch (emailErr) {
      console.error('Formspree error:', emailErr.message);
      // Don't fail the request if email fails
    }
    
    res.status(201).json({ 
      success: true, 
      message: 'Booking saved successfully',
      id: info.lastInsertRowid 
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

// All other GET requests not handled will return the React app
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
