import { graphql } from 'babel-plugin-relay/macro';

export const itemsQuery = graphql`
  query ItemsQuery {
    Items {
      id
      name
      description
      price
    }
  }
`;

export const upsertItemsMutation = graphql`
  mutation ItemsUpsertMutation(
    $name: String!
    $description: String!
    $price: PositiveFloat!
  ) {
    upsertItem(
      input: { name: $name, price: $price, description: $description }
    ) {
      Item {
        id
        description
        name
        price
      }
    }
  }
`;
