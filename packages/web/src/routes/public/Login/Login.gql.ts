import { graphql } from 'babel-plugin-relay/macro';

export const loginMutation = graphql`
  mutation LoginMutation($email: EmailAddress!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      error
    }
  }
`;
