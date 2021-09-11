import { userModelQueries, projectModelQueries } from './queries';
import { userMutations, projectMutations } from './mutations';

export const resolvers = {
    Query: {
      ...userModelQueries,
      ...projectModelQueries
    },
    Mutation: {
      ...userMutations,
      ...projectMutations
    }
};