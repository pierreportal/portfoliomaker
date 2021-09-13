import { gql } from '@apollo/client'

export const GET_PROJECT = gql`
query project($projectId: ID!) {
    project(projectId: $projectId) {
        id
        title
        createdAt
        url
        published
        routes { 
            label
            path
        }
    }
  }`