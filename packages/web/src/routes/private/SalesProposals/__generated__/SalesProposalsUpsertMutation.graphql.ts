/**
 * @generated SignedSource<<958fb38605a780ccf1e4e6b441b3f025>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SalesProposalsUpsertMutation$variables = {
  client: string;
  items?: ReadonlyArray<string> | null | undefined;
  name: string;
};
export type SalesProposalsUpsertMutation$data = {
  readonly upsertSalesProposals: {
    readonly SalesProposal: {
      readonly Client: {
        readonly email: string;
        readonly id: string;
        readonly name: string;
      };
      readonly Items: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly price: any;
      }>;
      readonly id: string;
    } | null | undefined;
  };
};
export type SalesProposalsUpsertMutation = {
  response: SalesProposalsUpsertMutation$data;
  variables: SalesProposalsUpsertMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "client"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "items"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "client",
            "variableName": "client"
          },
          {
            "kind": "Variable",
            "name": "items",
            "variableName": "items"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpsertSalesProposalsPayload",
    "kind": "LinkedField",
    "name": "upsertSalesProposals",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SalesProposal",
        "kind": "LinkedField",
        "name": "SalesProposal",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "Client",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "Items",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "price",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SalesProposalsUpsertMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SalesProposalsUpsertMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "34953971bfbab2d04cf39668f702e95c",
    "id": null,
    "metadata": {},
    "name": "SalesProposalsUpsertMutation",
    "operationKind": "mutation",
    "text": "mutation SalesProposalsUpsertMutation(\n  $name: String!\n  $client: ID!\n  $items: [ID!]\n) {\n  upsertSalesProposals(input: {name: $name, client: $client, items: $items}) {\n    SalesProposal {\n      id\n      Client {\n        id\n        name\n        email\n      }\n      Items {\n        id\n        name\n        price\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e9e45136d432126d10dbce6869e9b7dc";

export default node;
