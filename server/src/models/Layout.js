import mongoose, {Schema} from 'mongoose';

const schema = new Schema({
    path: {
        type: String,
        required: true
    },
    components: {
        type: [mongoose.ObjectId],
        ref: 'LayoutComponent',
        required: false
    }
})

export const Layout = mongoose.model('Layout', schema);