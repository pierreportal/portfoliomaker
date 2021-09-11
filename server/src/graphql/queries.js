import { User, Project } from '../models'

export const userModelQueries = {
    users: () => User.find().then(res => res).catch(err => err),
    user: (_, {userId}) => User.findOne({_id: userId}).then(res => res).catch(err => err),
};

export const projectModelQueries = {
    projects: (_, {ownerId}) => Project.find({owner: ownerId}).then(res => res).catch(err => err),
    project: (_, {projectId}) => Project.findOne({_id: projectId}).then(res => res).catch(err => err),
}