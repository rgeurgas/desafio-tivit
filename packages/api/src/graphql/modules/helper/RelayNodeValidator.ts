import { fromGlobalId } from 'graphql-relay';
import { anyNonNil } from 'is-uuid';
import { mixed, array, StringSchema } from 'yup';

export function getTransformGlobalId(nodeTypes: string[], val: unknown) {
  if (typeof val !== 'string') {
    return val;
  }
  const { id, type } = fromGlobalId(val);
  if (!nodeTypes.includes(type)) {
    return new Error(
      `invalid object type, given: ${type}, expected one of ${nodeTypes.join(
        ', '
      )}`
    );
  }
  return id;
}

export function getNodeIdYupValidationSchema(
  nodeTypes: string[],
  testUuid = true
) {
  return mixed()
    .transform((val) => getTransformGlobalId(nodeTypes, val))
    .transform((value) => (value ? value : undefined))
    .test(
      'string',
      'invalid-id',
      (val) => val === undefined || val === null || typeof val === 'string'
    )
    .test(
      'uuid',
      'invalid-id',
      (val) => !val || !testUuid || anyNonNil(val)
    ) as StringSchema;
}

export function getArrayNodeIdYupValidationSchema(
  nodeTypes: string[],
  testUuid = true
) {
  return array(getNodeIdYupValidationSchema(nodeTypes, testUuid).required());
}
