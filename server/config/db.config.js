const mongoose = require('mongoose');

const dbconfig = async () => {
    try{
        const DB_URI=process.env.DB_URI;
        await mongoose.connect(DB_URI);
        console.log('MongoDB connected...')
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbconfig;
