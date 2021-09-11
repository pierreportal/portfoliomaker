import mongoose, {Schema} from 'mongoose';

const layoutSettingsType = {
    x: Number,
    y: Number,
    w: Number,
    h: Number
}

const schema = new Schema({
    componentType: {
        type: String,
        required: true
    },
    layoutSettings: {
        type: layoutSettingsType,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    feed: {
        type: String, // id of dynamic feed of media
        required: false
    },
    customStyles: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    }
})

export const LayoutComponent = mongoose.model('LayoutComponent', schema);