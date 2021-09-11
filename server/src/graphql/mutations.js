import { User, Project } from '../models'

export const userMutations = {
    createUser: async (_, { username, password, email }) => {
        const user = new User({ username, password, email });
        await user.save();
        return user
    }
};

export const projectMutations = {
    createProject: async (_, { ownerId, title }) => {
        const project = new Project({ ownerId, title });
        await project.save();
        return project
    }
};