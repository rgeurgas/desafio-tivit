import { graphql } from 'babel-plugin-relay/macro';

export const salesProposalsQuery = graphql`
  query SalesProposalsQuery {
    Clients {
      id
      name
    }
    Items {
      id
      name
      price
    }
    SalesProposals {
      id
      Client {
        id
        name
        email
      }
      Items {
        id
        name
        price
      }
    }
  }
`;

export const upsertSalesProposalsMutation = graphql`
  mutation SalesProposalsUpsertMutation(
    $name: String!
    $client: ID!
    $items: [ID!]
  ) {
    upsertSalesProposals(
      input: { name: $name, client: $client, items: $items }
    ) {
      SalesProposal {
        id
        Client {
          id
          name
          email
        }
        Items {
          id
          name
          price
        }
      }
    }
  }
`;
