import { gql } from '@apollo/client'

export const CREATE_PROJECT_MUTATION = gql`
mutation createProject($ownerId: ID!) {
    createProject(ownerId: $ownerId) {
        title
        routes { 
            label
            path
        }
    }
  }`