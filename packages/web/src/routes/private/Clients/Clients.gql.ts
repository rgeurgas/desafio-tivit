import { graphql } from 'babel-plugin-relay/macro';

export const clientsQuery = graphql`
  query ClientsQuery {
    Clients {
      id
      name
      email
    }
  }
`;

export const upsertClientsMutation = graphql`
  mutation ClientsUpsertMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    upsertClient(input: { name: $name, password: $password, email: $email }) {
      Client {
        id
        name
        email
      }
    }
  }
`;
