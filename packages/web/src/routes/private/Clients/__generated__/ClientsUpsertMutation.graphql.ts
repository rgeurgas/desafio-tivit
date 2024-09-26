/**
 * @generated SignedSource<<61347ce43f3dbab481c81b58d1d0c12a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ClientsUpsertMutation$variables = {
  email: string;
  name: string;
  password: string;
};
export type ClientsUpsertMutation$data = {
  readonly upsertClient: {
    readonly Client: {
      readonly email: string;
      readonly id: string;
      readonly name: string;
    } | null | undefined;
  };
};
export type ClientsUpsertMutation = {
  response: ClientsUpsertMutation$data;
  variables: ClientsUpsertMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpsertClientPayload",
    "kind": "LinkedField",
    "name": "upsertClient",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "Client",
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
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
    "name": "ClientsUpsertMutation",
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
    "name": "ClientsUpsertMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "5fd431b4fb3b3c9a7ce312bf19213cef",
    "id": null,
    "metadata": {},
    "name": "ClientsUpsertMutation",
    "operationKind": "mutation",
    "text": "mutation ClientsUpsertMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  upsertClient(input: {name: $name, password: $password, email: $email}) {\n    Client {\n      id\n      name\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "023ae92ab563ad744351c38be768ce38";

export default node;
