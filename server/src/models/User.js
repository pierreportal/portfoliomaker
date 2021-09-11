import mongoose, {Schema} from 'mongoose';

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    projects: {
        type: [mongoose.ObjectId], // project ids added when create new project
        // ref: 'Project',
        required: false
    }
})

export const User = mongoose.model('User', schema);


// const kitty = new Cat({ name: 'Zildjian' });
    
    // kitty.save().then(() => console.log('meow')).catch(err => console.log(err));