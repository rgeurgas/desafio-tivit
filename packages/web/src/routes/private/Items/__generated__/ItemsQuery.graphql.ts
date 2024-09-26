/**
 * @generated SignedSource<<c050ee300d9a867462c343c942f9042b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ItemsQuery$variables = Record<PropertyKey, never>;
export type ItemsQuery$data = {
  readonly Items: ReadonlyArray<{
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly price: any;
  }> | null | undefined;
};
export type ItemsQuery = {
  response: ItemsQuery$data;
  variables: ItemsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "Items",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ca03863f8b5d1d94ecb579ec8ec0b89e",
    "id": null,
    "metadata": {},
    "name": "ItemsQuery",
    "operationKind": "query",
    "text": "query ItemsQuery {\n  Items {\n    id\n    name\n    description\n    price\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc1739c8bb6aa104a90fd475c95d4435";

export default node;
