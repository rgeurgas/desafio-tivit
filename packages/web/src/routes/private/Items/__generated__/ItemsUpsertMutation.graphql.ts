/**
 * @generated SignedSource<<c29dcda81ebdba2aed25b8c49efcf43e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ItemTypes = "OTHERS" | "PRODUCT" | "SERVICE" | "%future added value";
export type ItemsUpsertMutation$variables = {
  description: string;
  name: string;
  price: any;
  type: ItemTypes;
};
export type ItemsUpsertMutation$data = {
  readonly upsertItem: {
    readonly Item: {
      readonly description: string;
      readonly id: string;
      readonly name: string;
      readonly price: any;
      readonly type: ItemTypes | null | undefined;
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
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v4 = [
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
          },
          {
            "kind": "Variable",
            "name": "type",
            "variableName": "type"
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemsUpsertMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemsUpsertMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "f92097024a975cdea00d3ac708806f5d",
    "id": null,
    "metadata": {},
    "name": "ItemsUpsertMutation",
    "operationKind": "mutation",
    "text": "mutation ItemsUpsertMutation(\n  $name: String!\n  $description: String!\n  $price: PositiveFloat!\n  $type: ItemTypes!\n) {\n  upsertItem(input: {name: $name, price: $price, description: $description, type: $type}) {\n    Item {\n      id\n      description\n      name\n      price\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ce2f58595e0a3af2a98dbeab26f8111d";

export default node;
