import { User, Project } from '../models'

export const userModelQueries = {
    users: () => User.find().then(res => res).catch(err => err),
    loggedIn: (_, arg, {req}) => {
        console.log('\n\n\nloggedin req.session ? ', req.session)
        return req.session.user
    },
    user: (_, {userId}, {req}) => {
        console.log('\n\n\nuser req session: ', req.session)
        return User.findOne({_id: userId}).then(res => res).catch(err => err)
    },

    
    logout: (_, arg, {req}) => {
        console.log('\n\n\nlogout req session: ', req.session)
        req.session.destroy();
        return true
    }
};

export const projectModelQueries = {
    projects: (_, {ownerId}) => Project.find({owner: ownerId}).then(res => res).catch(err => err),
    project: (_, {projectId}) => Project.findOne({_id: projectId}).then(res => res).catch(err => err),
}