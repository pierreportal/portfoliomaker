import { User, Project } from '../models'

export const userMutations = {
    createUser: async (_, { password, email }) => {
        // if email exist, retirn false -> login
        const user = new User({ password, email });
        await user.save();
        return user
    },
    loginUser: async (_, { password, email }, { req }) => {
        const user = await User.findOne({email, password}).then(res => res).catch(err => err);
        // if (user) {
            req.session.user = user;
            req.session.save(() => {
                console.log(req.session);
            });
        // }
        return req.session.user
    },
};

export const projectMutations = {
    createProject: async (_, { ownerId }) => {
        const project = new Project({ ownerId, title: "New project" });
        await project.save();
        return project
    }
};

// pierreportal.mac@gmail.com