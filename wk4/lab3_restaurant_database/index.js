// index.js
const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./model/RestaurantSchema');
const { MONGO_URL } = require('./config');

const app = express();

const uri = MONGO_URL;

// Database connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.use(express.json());

// Get all restaurants 
app.get('/restaurants', async (req, res) => {
  try {
    const { sortBy } = req.query;
    let query = Restaurant.find({});

    // sorting the values by restaurant_id, ASC or DESC
    if (sortBy) {
      const upperSort = sortBy.toUpperCase();
      if (upperSort !== 'ASC' && upperSort !== 'DESC') {
        return res
          .status(400)
          .json({ message: 'Invalid. Use ASC or DESC.' });
      }


      // Querying for what to sort
      let sortOrder;
      if (upperSort === 'DESC') {
        sortOrder = -1;
      } else {
        sortOrder = 1;
      }
      query = query
        .select({
          _id: 1,
          cuisine: 1,
          name: 1,
          city: 1,
          restaurant_id: 1
        })
        .sort({ restaurant_id: sortOrder });
    }

    const restaurants = await query;
    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
  }
});


// Get restaurants by cuisine
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  try {
    const { cuisine } = req.params;
    const query = Restaurant.find({ cuisine });
    const restaurants = await query;
    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants by cuisine:', error);
  }
});

// All restaurants that are equal to Delicatessen and not to Brooklyn
app.get('/restaurants/Delicatessen', async (res) => {
  try {
    const query = Restaurant.find({
      cuisine: 'Delicatessen',
      city: { $ne: 'Brooklyn' },
    })
      .select({
        cuisine: 1,
        name: 1,
        city: 1,
        _id: 0
      })
      .sort({ name: 1 });
    const restaurants = await query;
    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching Delicatessen restaurants:', error);
  }
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
