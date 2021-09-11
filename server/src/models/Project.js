import mongoose, { Schema } from 'mongoose';
import { User } from '../models/User'

const routesType = {
    label: String,
    path: String,
}

const gridConfigsType = {}
const defaultGridConfigs = {}

const mainCustomStylesType = {}
const defaultmainCustomStyles = {}

const schema = new Schema ({
    ownerId: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
        required: true,
        default: 'New project'
    },
    url: {
        type: String,
        required: false,
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    },
    routes: {
        type: [routesType],
        required: true,
        default: [
            {
                label: 'Home',
                path: '/'
            }
        ]
    },
    gridConfigs: {
        type: gridConfigsType,
        default: defaultGridConfigs,
        required: true
    },
    mainCustomStyles:{
        type: mainCustomStylesType,
        default: defaultmainCustomStyles,
        required: true
    },
    mainLayoutComponents:{
        type: mongoose.ObjectId,
        // ref: 'Layout'
    },
    layouts: {
        type: [mongoose.ObjectId],
        // ref: 'Layout'
    }
})

export const Project = mongoose.model('Project', schema);