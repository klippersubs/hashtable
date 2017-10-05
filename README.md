# @klippersubs/hashtable

[![Travis CI](https://img.shields.io/travis/klippersubs/hashtable.svg?style=flat-square)][ci]
[![NPM version](https://img.shields.io/npm/v/@klippersubs/hashtable.svg?style=flat-square)][npm]

 >  Hash table implementation.

````bash
yarn add @klippersubs/hashtable
````

````javascript
import HashTable, { hashString } from '@klippersubs/hashtable';

const ht = new HashTable(hashString);

ht.set('Alice', '+7 987 654‑32‑10');
ht.set('Bob', '+81 987 654‑32‑10');
ht.set('Alice', '+81 012 345‑67‑89');
ht.delete('Bob');

console.log(ht.get('Alice'));
// → '+81 012 345‑67‑89'
console.log(ht.get('Bob'));
// → undefined
console.log(ht.has('Bob'));
// → false
````

````javascript
import { StringTable } from '@klippersubs/hashtable';

const st = new StringTable();

st.set('Alice', '+7 987 654‑32‑10');
st.set('Bob', '+81 987 654‑32‑10');
st.set('Alice', '+81 012 345‑67‑89');
st.delete('Bob');

console.log(st.get('Alice'));
// → '+81 012 345‑67‑89'
console.log(st.get('Bob'));
// → undefined
console.log(st.has('Bob'));
// → false
````

## Exported API

### Type export `Hash`

 >  Callback type for calculating a hash of key.

Generic params:

 *  `Key` — key type.

Params:

 *  `key: Key` — a key to calculate hash.
 *  `capacity: number` — hash table capacity.

Return value:

 *  `number` — hash.

### Export `hashString`

 >  Calculates a hash of string key.

Params:

 *  `key: string` — a key to calculate hash.
 *  `capacity: number` — hash table capacity.

Return value:

 *  `number` — hash.

### Default export `HashTable`

 >  Hash table class.

Generic params:

 *  `Key` — key type.
 *  `Value` — value type.

#### Constructor

Params:

 *  `hash: Hash<Key>` — hash function.
 *  `capacity: number = 8` — capacity of the hash table.

#### Method `set`

 >  Sets key–value pair.

Params:

 *  `key: Key`.
 *  `value: Value`.

Return value:

 *  `this`.

#### Method `get`

 >  Returns value of a key–value pair.

Params:

 *  `key: Key`.

Return value:

 *  `Value`.

#### Method `has`

 >  Checks if key—value pair exists.

Params:

 *  `key: Key`.

Return value:

 *  `boolean`.

#### Method `delete`

 >  Deletes key—value pair.

Params:

 *  `key: Key`.

Return value:

 *  `this`.

### Export `StringTable`

 >  Specialized hash table with string keys.

Generic params:

 *  `Value` — value type.

#### Constructor

Params:

 *  `capacity: number = 8` — capacity of the hash table.

## License

MIT

[ci]: https://travis-ci.org/klippersubs/hashtable
[npm]: https://www.npmjs.com/package/@klippersubs/hashtable
