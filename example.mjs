import assert from 'node:assert/strict';
export const summarize = values => ({ count: values.length, total: values.reduce((sum, value) => sum + value, 0) });
const result = summarize([2, 3, 5]);
assert.deepEqual(result, { count: 3, total: 10 });
assert.deepEqual(summarize([]), { count: 0, total: 0 });
console.log(JSON.stringify(result));
