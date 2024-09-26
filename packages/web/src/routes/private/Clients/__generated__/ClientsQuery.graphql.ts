/**
 * @generated SignedSource<<2cad453b1cf526e39ebbe494e4541ee4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ClientsQuery$variables = Record<PropertyKey, never>;
export type ClientsQuery$data = {
  readonly Clients: ReadonlyArray<{
    readonly email: string;
    readonly id: string;
    readonly name: string;
  }> | null | undefined;
};
export type ClientsQuery = {
  response: ClientsQuery$data;
  variables: ClientsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Client",
    "kind": "LinkedField",
    "name": "Clients",
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
        "name": "email",
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
    "name": "ClientsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "246b8cb821f17e30d28311845c67213b",
    "id": null,
    "metadata": {},
    "name": "ClientsQuery",
    "operationKind": "query",
    "text": "query ClientsQuery {\n  Clients {\n    id\n    name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "c36e6cc1240159ed36d958f763ce9e03";

export default node;
