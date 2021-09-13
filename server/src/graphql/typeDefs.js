import { gql } from "apollo-server-express";

export const typeDefs = gql`

  scalar Date
  scalar Object

  type User {
    id: ID,
    username: String,
    password: String,
    email: String,
    projects: [Project]
  }

  type UserRoute {
    label: String,
    path: String
  }

  type Project {
    id: ID,
    owner: ID,
    createdAt: Date,
    title: String,
    url: String,
    published: Boolean,
    routes: [UserRoute],
    gridConfigs: String,  # to change
    mainCustomStyles: String,  # to change
    mainLayoutComponents: String,  # to change
    layouts:  String,  # to change
  }

  type Query {
    loggedIn: User
    logout: Boolean
    users: [User]
    user(userId: String!): User!
    projects(ownerId: ID!): [Project!]!
    project(projectId: ID!): Project!

  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    loginUser(email: String!, password: String!): User
    createProject(ownerId: ID!): Project!
  }
`;