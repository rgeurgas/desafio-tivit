/**
 * @generated SignedSource<<4490a8f38e110247df06585adcb50937>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ItemsUpsertMutation$variables = {
  description: string;
  name: string;
  price: any;
};
export type ItemsUpsertMutation$data = {
  readonly upsertItem: {
    readonly Item: {
      readonly description: string;
      readonly id: string;
      readonly name: string;
      readonly price: any;
    } | null | undefined;
  };
};
export type ItemsUpsertMutation = {
  response: ItemsUpsertMutation$data;
  variables: ItemsUpsertMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "price"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "price",
            "variableName": "price"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpsertItemPayload",
    "kind": "LinkedField",
    "name": "upsertItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "Item",
        "plural": false,
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
            "name": "description",
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
            "name": "price",
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
    "name": "ItemsUpsertMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemsUpsertMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "8ecc8c853cf35e8b2c08b631a803f576",
    "id": null,
    "metadata": {},
    "name": "ItemsUpsertMutation",
    "operationKind": "mutation",
    "text": "mutation ItemsUpsertMutation(\n  $name: String!\n  $description: String!\n  $price: PositiveFloat!\n) {\n  upsertItem(input: {name: $name, price: $price, description: $description}) {\n    Item {\n      id\n      description\n      name\n      price\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d810d4d0c5f90a64145148625e69c425";

export default node;
