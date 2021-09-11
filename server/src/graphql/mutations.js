import { User, Project } from '../models'

export const userMutations = {
    createUser: async (_, { password, email }) => {
        // if email exist, retirn false -> login
        const user = new User({ password, email });
        await user.save();
        return user
    },
    loginUser: async (_, { password, email }) => {
        const user = await User.findOne({email, password}).then(res => res).catch(err => err);
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