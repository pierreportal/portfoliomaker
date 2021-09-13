import { gql } from '@apollo/client'

export const GET_MY_PROJECTS = gql`
query projects($ownerId: ID!) {
    projects(ownerId: $ownerId) {
        id
        title
        createdAt
        url
        published
    }
  }`