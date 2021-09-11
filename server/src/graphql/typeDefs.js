import { gql } from "apollo-server-express";

export const typeDefs = gql`

  scalar Date

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
    users: [User]
    user(userId: String!): User!
    projects(ownerId: ID!): [Project!]!
    project(projectId: ID!): Project!

  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    createProject(ownerId: ID!, title: String!): Project!
  }
`;