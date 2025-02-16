const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [4, 'Username must be at least 4 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    match: [/^[A-Za-z\s]+$/, 'City name can only contain alphabets and spaces']
  },
  website: {
    type: String,
    required: [true, 'Website URL is required'],
    match: [/^https?:\/\/[\w.-]+\.[a-z]{2,6}([\/\w .-]*)*\/?$/i, 'Please enter a valid URL starting with http:// or https://']
  },
  zipCode: {
    type: String,
    required: [true, 'Zip code is required'],
    match: [/^\d{5}-\d{4}$/, 'Zip code must be in the format 12345-1234']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d-\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format 1-123-123-1234']
  }
});

module.exports = mongoose.model('User', userSchema);
