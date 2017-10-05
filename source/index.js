/**
 * @file Hash table implementation.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright KlipperSubs, 2017
 * @flow
 */

/**
 * Callback type for calculating a hash of key.
 * @generic Key — key type.
 * @param {Key} key — a key to calculate hash.
 * @param {number} capacity — hash table capacity.
 * @return {number} — hash.
 */
export type Hash<Key> = (key: Key, capacity: number) => number;

/**
 * Calculates a hash of string key.
 * @param {string} key — a key to calculate hash.
 * @param {number} capacity — hash table capacity.
 * @return {number} — hash.
 */
export const hashString: Hash<string> = (key, capacity): number => {
    if (typeof key !== 'string') {
        throw new TypeError('`key` must be a string');
    }

    if (typeof capacity !== 'number' || isNaN(capacity)) {
        throw new TypeError('`capacity` must be a number');
    }

    if (capacity <= 0) {
        throw new RangeError('`capacity` must be greater than zero, less than infinity');
    }

    let hash = capacity - 1;

    for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) + key[i].charCodeAt(0);
        hash = hash % capacity;
    }

    return hash;
};

/**
 * Hash table class.
 * @generic Key — key type.
 * @generic Value — value type.
 */
export default class HashTable<Key, Value> {
    /**
     * Hash function.
     * @private
     * @type {Hash<Key>}
     */
    hash: Hash<Key>;

    /**
     * Capacity of the hash table.
     * @private
     * @type {number}
     */
    capacity: number;

    /**
     * Data of the hash table.
     * @private
     * @type {Array<Map<Key, Value>>}
     */
    data: Array<Map<Key, Value>>;

    /**
     * @param {Hash<Key>} hash — hash function.
     * @param {number} [capacity] — capacity of the hash table.
     */
    constructor(hash: Hash<Key>, capacity: number = 8) {
        this.hash = hash;
        this.capacity = capacity;
        this.data = new Array(capacity);

        for (let i = 0; i < capacity; i++) {
            this.data[i] = new Map();
        }
    }

    /**
     * Sets key–value pair.
     * @param {Key} key
     * @param {Value} value
     * @return {this}
     */
    set(key: Key, value: Value) {
        this.data[this.hash(key, this.capacity)].set(key, value);

        return this;
    }

    /**
     * Returns value of a key–value pair.
     * @param {Key} key
     * @return {Value}
     */
    get(key: Key) {
        return this.data[this.hash(key, this.capacity)].get(key);
    }

    /**
     * Checks if key—value pair exists.
     * @param {Key} key
     * @return {boolean}
     */
    has(key: Key) {
        return this.data[this.hash(key, this.capacity)].has(key);
    }

    /**
     * Deletes key—value pair.
     * @param {Key} key
     * @return {this}
     */
    delete(key: Key) {
        this.data[this.hash(key, this.capacity)].delete(key);

        return this;
    }
}

/**
 * Specialized hash table with string keys.
 * @generic Value — value type.
 */
export class StringTable<Value> extends HashTable<string, Value> {
    /**
     * @param {number} [capacity] — capacity of the hash table.
     */
    constructor(capacity?: number) {
        super(hashString, capacity);
    }
}
