import mongoose  from 'mongoose';

const Connection = async (username = 'hello', password = 'world') => {
    const URL = `mongodb+srv://username:password@realtimeeditor.sav8z.mongodb.net/?retryWrites=true&w=majority&appName=realtimeeditor`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;