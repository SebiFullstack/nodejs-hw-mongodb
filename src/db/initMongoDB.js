// src/db/initMongoDB.js

import mongoose from 'mongoose';

// import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoDB = async () => {
  try {
    // const user = getEnvVar('MONGODB_USER');
   // const pwd = getEnvVar('MONGODB_PASSWORD');
    // const url = getEnvVar('MONGODB_URL');
   // const db = getEnvVar('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://sebiashtef:GHGNXVAT32BY8IZw@students.v0dvu.mongodb.net/contacts?retryWrites=true&w=majority&appName=Students`
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};