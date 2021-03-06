/**
 * File    : User.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 15/10/2017
 */
const mongoose = require('mongoose');
/*
 * const Schema = mongoose.Schema; the below line is identical.
 * we can use destructuring as below, meaning: The mongoose obj has a property called: Schema.
 * Take that property and assign it to a new variable schema.
 */
const { Schema } = mongoose;

/**
 * Define our User schema.
 * - We can add/remove properties to our schema at any time
 * @type {*}
 * index: true options to email to optimize queries that use this field
 * {timestamps: true} option creates a createdAt and updatedAt field on our models that contain timestamps which
 *                    will get automatically updated when our model changes.
 */
const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  email: {type: String, lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  name: String,
  credits: {type: Number, default: 0}
}, {timestamps: true});

/**
 * Load our userSchema into mongoose, by
 * creating a 'users' collection if it is not already exists
 * and assign it a schema
 */
mongoose.model('users', userSchema);
