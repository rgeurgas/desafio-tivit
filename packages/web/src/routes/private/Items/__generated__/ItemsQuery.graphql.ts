/**
 * @generated SignedSource<<a5d99af7b7338e8bc8aea2883ece9f7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ItemTypes = "OTHERS" | "PRODUCT" | "SERVICE" | "%future added value";
export type ItemsQuery$variables = Record<PropertyKey, never>;
export type ItemsQuery$data = {
  readonly Items: ReadonlyArray<{
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly price: any;
    readonly type: ItemTypes | null | undefined;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
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
    "cacheID": "2a9d2de7ad08902e939cd8d18547c35d",
    "id": null,
    "metadata": {},
    "name": "ItemsQuery",
    "operationKind": "query",
    "text": "query ItemsQuery {\n  Items {\n    id\n    name\n    description\n    price\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "d541dadde73a2b25f05f5b4cb16af85b";

export default node;
