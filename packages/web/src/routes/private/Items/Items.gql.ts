import { graphql } from 'babel-plugin-relay/macro';

export const itemsQuery = graphql`
  query ItemsQuery {
    Items {
      id
      name
      description
      price
      type
    }
  }
`;

export const upsertItemsMutation = graphql`
  mutation ItemsUpsertMutation(
    $name: String!
    $description: String!
    $price: PositiveFloat!
    $type: ItemTypes!
  ) {
    upsertItem(
      input: {
        name: $name
        price: $price
        description: $description
        type: $type
      }
    ) {
      Item {
        id
        description
        name
        price
        type
      }
    }
  }
`;
