/**
 * @generated SignedSource<<3d4adbceb36c9900b0d176f3074037a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SalesProposalsQuery$variables = Record<PropertyKey, never>;
export type SalesProposalsQuery$data = {
  readonly Clients: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }> | null | undefined;
  readonly Items: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly price: any;
  }> | null | undefined;
  readonly SalesProposals: ReadonlyArray<{
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
  }> | null | undefined;
};
export type SalesProposalsQuery = {
  response: SalesProposalsQuery$data;
  variables: SalesProposalsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Item",
  "kind": "LinkedField",
  "name": "Items",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Client",
    "kind": "LinkedField",
    "name": "Clients",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "storageKey": null
  },
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "SalesProposal",
    "kind": "LinkedField",
    "name": "SalesProposals",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "Client",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
      (v2/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SalesProposalsQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SalesProposalsQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "cecbd74738e6c12fe1fa702a706194f2",
    "id": null,
    "metadata": {},
    "name": "SalesProposalsQuery",
    "operationKind": "query",
    "text": "query SalesProposalsQuery {\n  Clients {\n    id\n    name\n  }\n  Items {\n    id\n    name\n    price\n  }\n  SalesProposals {\n    id\n    Client {\n      id\n      name\n      email\n    }\n    Items {\n      id\n      name\n      price\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d1d4220ed8c7723daf1327fcba4e4207";

export default node;
