import mongoose from 'mongoose';

const Database = new mongoose.Schema({
    title: String,
    director: String,
    year: String,
    cover: String,
    plot: String,
    rating: Number,
    haveIt: Boolean
});

export default mongoose.model('Database', Database);