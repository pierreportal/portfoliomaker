
import { gql } from '@apollo/client'

export const CHECK_LOGGED_IN_QUERY = gql`
query loggedIn {
    loggedIn {
        username
        email
        id
    }
  }`