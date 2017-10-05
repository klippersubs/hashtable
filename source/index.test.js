/**
 * @file Hash table implementation. (Tests.)
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright KlipperSubs, 2017
 */

/*
 eslint-env jest
 */

import HashTable, { hashString, StringTable } from './index';

const strings = [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
    'aaaaaaa',
    'aaaaaaaa',
    'aaaaaaaaa',
    'aabbbaaaaa',
    'aabbbaaaaaa',
    'aabbbaaaaaaa',
    'aabbbaaaaaaaa',
    'aabbbaacccccaa',
    'aabbbaacccccaaa',
    'aabbbaacccccaaaa',
    'aabbbaacccccaaaaa',
    'aaaaaaacccccaaaaaa',
    'aaaaaaacccccaaaaaaa',
    'aaaaaaacccccaaaaaaaa',
    'aaaaaaaaaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaaaaaaaaaa',
    'aaaaaaaaaa33333aaaaaaaaa',
    'aaaaaaaaaa33333aaaaaaaaaa',
    'aaaaaaaaaa33333aaaaaaaaaaa',
    'aaaaaaaaaa33333aaaaaaaaaaaa',
    'aaaaaaaaaa33333aaaaaaaaaaaaa',
    'aaaaaaaaaa33333aaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'b',
    'bb',
    'bbb',
    'bbbb',
    'bbbbb',
    'bbbbbb',
    'bbbbbbb',
    'bbbbbbbb',
    'bbbbbbbbb',
    'bbbqqqqbbb',
    'bbbqqqqbbbb',
    'bbbbbbbbbbbb',
    'bbbbbbbbbbbbb',
    'bbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbbbbbbbbb',
    'bbbvvvvbbbbbbbbbbbbbbbbbb',
    'bbbvvvvbbbbbbbbbbbbbbbbbbb',
    'bbbvvvvbbbbbbbbbbbbbbbbbbbb',
    'bbbvvvvbbbbbbbbbbbbbbbbbbbbb',
    'bbbvvvvbbbbbbbbbbbbbbbbbbbbbb',
    'bbbvvvvbbbbbbbbbbbbbbbbbbbbbbb',
    'bbbvvvvbbbbbbbbbbbbbbbbbbbbbbbb',
    'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    'c',
    'cc',
    'ccc',
    'cccc',
    'ccccc',
    'cccccc',
    'ccccccc',
    'cccccccc',
    'ccccccccc',
    'cccccccccc',
    'ccccccccccc',
    'cccccccccccc',
    'ccccccccccccc',
    'cccccccccccccc',
    'cccccffcccccccc',
    'cccccffccccccccc',
    'cccccffcccccccccc',
    'cccccffcccccoocccc',
    'cccccffcccccooccccc',
    'cccccffcccccoocccccc',
    'cccccffcccccooccccccc',
    'ccccccccccccoocccccccc',
    'ccccccccccccooccccccccc',
    'ccccccccccccoocccccccccc',
    'ccccccccccccooccccccccccc',
    'ccccccccccccoocccccccccccc',
    'ccccccccccccoocmmmmmmmccccc',
    'ccccccccccccoocmmmmmmmcccccc',
    'cccccccccccccccmmmmmmmccccccc',
    'cccccccccccccccmmmmmmmcccccccc',
    'cccccccccccccccmmmmmmmccccccccc',
    'cccccccccccccccmmmmmmmcccccccccc',
    'd',
    'dx',
    'dxd',
    'dxdd',
    'dxddd',
    'dxdddd',
    'dxddddd',
    'dddddddd',
    'ddddddddd',
    'dddddddddd',
    'ddddddddddd',
    'dddddddddddd',
    'ddddddddddddd',
    'dddddddddddddd',
    'ddddddddddddddd',
    'dddddddddddddddd',
    'ddddddddppppddddd',
    'ddddddddppppdddddd',
    'ddddddddppppddddddd',
    'ddddddddppppdddddddd',
    'ddddddddppppddddddddd',
    'ddddddddppppdddddddddd',
    'ddddddddppppddddddddddd',
    'ddddddddppppdddddddddddd',
    'ddddddddppppddddddddddddd',
    'ddddddddppppdddddddddddddd',
    'ddddddddppppddddddddddddddd',
    'ddddddddppppdddddddddddddddd',
    'ddddddddppppddddddddddddddddd',
    'ddddddddppppdddddddddddddddddd',
    'ddddddddppppddddddddddddddddddd',
    'ddddddddppppdddddddddddddddddddd',
    'e',
    'ee',
    'eee',
    'eeee',
    'leeee',
    'leeeee',
    'leeeeee',
    'leeeeeee',
    'leeeeeeee',
    'leeeeeeeee',
    'leeeeeeeeee',
    'leeeeeeeeeee',
    'leeeeeeeeeeee',
    'leeeeeeeeeeeee',
    'leeeeeeeeeeeeee',
    'leeeeeeeeeeeeeee',
    'leeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'f',
    'ff',
    'fff',
    'ffff',
    'fffff',
    'ffffff',
    'fffffff',
    'ffffffff',
    'fffffffff',
    'ffffffffff',
    'fffffffffff',
    'ffffffffffff',
    'fffffffffffff',
    'wfffffffffffff',
    'wffffffffffffff',
    'wfffffffffffffff',
    'wffffffffffffffff',
    'wffffrrrffffffffff',
    'wffffrrrfffffffffff',
    'wffffrrrffffffffffff',
    'wffffrrrfffffffffffff',
    'wffffrrrffffffffffffff',
    'wffffrrrfffffffffffffff',
    'wffffrrrffffffffffffffff',
    'wffffrrrfffffffffffffffff',
    'wffffrrrffffffffffffffffff',
    'wffffrrrfffffffffffffffffff',
    'fffffrrrffffffffffffffffffff',
    'fffffrrrfffffffffffffffffffff',
    'fffffrrrffffffffffffffffffffff',
    'fffffrrrfffffffffffffffffffffff',
    'fffffrrrffffffffffffffffffffffff',
    't',
    'tg',
    'tgg',
    'tggg',
    'tgggg',
    'tggggg',
    'tgggggg',
    'tggggggg',
    'tgggshhyg',
    'tgggshhygg',
    'tgggshhyggg',
    'ggggshhygggg',
    'ggggshhyggggg',
    'ggggshhygggggg',
    'ggggshhyggggggg',
    'ggggshhygggggggg',
    'ggggshhyggggggggg',
    'ggggshhygggggggggg',
    'ggggshhyggggggggggg',
    'ggggshlakfsmwhqwgggg',
    'gggggglakfsmwhqwggggg',
    'gggggglakfsmwhqwgggggg',
    'gggggglakfsmwhqwggggggg',
    'gggggglakfsmwhqwgggggggg',
    'gggggglakfsmwhqwggggggggg',
    'gggggglakfsmwhqwgggggggggg',
    'gggggglakfsmwhqwggggggggggg',
    'gggggglakfsmwhqwgggggggggggg',
    'gggggglakfsmwhqwggggggggggggg',
    'gggggglakfsmwhqwgggggggggggggg',
    'gggggglakfsmwhqwggggggggggggggg',
    'gggggglakfsmwhqwgggggggggggggggg',
    'h',
    'hh',
    'hcp',
    'hcph',
    'hcphh',
    'hcphhh',
    'hcphhhh',
    'hcphhhhh',
    'hcphhhhhh',
    'hcphhhhhhh',
    'hcphhhhhhhh',
    'hcphhhhhhhhh',
    'hcphlamsukffr',
    'hcphlamsukffrh',
    'hcphlamsukffrhh',
    'hcphlamsukffrhhh',
    'hcphlamsukffrhhhh',
    'hcphlamsukffrhhhhh',
    'hcphlamsukffrhhhhhh',
    'hcphlamsukffrhhhhhhh',
    'hcphlamsukffrhhhhhhhh',
    'hcphlamsukffrhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhhhhhhhhh',
    'hhhhlamsukffrhhhhhhhhhhhhhhhhhhh',
];

describe('`hashString` function', () => {
    test('each hash value must be integer', () => {
        const hashes = strings.map(string => hashString(string, 32));

        expect(hashes).toEqual(hashes.map(hash => hash & hash));
    });

    test('each hash value must be in [0, capacity)', () => {
        const capacity = 8;
        const hashes = strings.map(string => hashString(string, capacity));

        expect(hashes).toEqual(hashes.map(hash => Math.max(0, Math.min(hash, capacity - 1))));
    });

    test('distribution of hash values must be as uniform as possible', () => {
        const capacity = 8;
        const hashes = strings.map(string => hashString(string, capacity));

        const counts = new Array(capacity);

        for (let i = 0; i < capacity; i++) {
            counts[i] = 0;
        }

        hashes.forEach(hash => counts[hash]++);

        counts.sort((a, b) => a - b);

        expect(counts[capacity - 1] - counts[0]).toBeLessThanOrEqual(3);
    });
});

describe('`HashTable` class', () => {
    test('default capacity must be 8', () => {
        const ht = new HashTable(hashString);

        expect(ht.capacity).toEqual(8);
    });

    test('`data` array length must be equal to capacity', () => {
        const capacity = 10;
        const ht = new HashTable(hashString, capacity);

        expect(ht.data.length).toEqual(capacity);
    });

    test('using key types incompatible with hash function must cause an error', () => {
        const ht = new HashTable(hashString);

        expect(() => {
            ht.set({ id: 'key' }, 'value');
        }).toThrow();
    });

    test('`set` method must return `this`', () => {
        const ht = new HashTable(hashString);

        expect(ht.set('key', 'value')).toBe(ht);
    });

    test('`get` method must return `undefined` if there is no value for such key', () => {
        const ht = new HashTable(hashString);

        expect(ht.get('key')).toEqual(undefined);
    });

    test('`get` method must return right value if there is value for such key', () => {
        const ht = new HashTable(hashString);

        ht.set('key', 'value');

        expect(ht.get('key')).toEqual('value');
    });

    test('`get` method must return right value for a key if it was overridden', () => {
        const ht = new HashTable(hashString);

        ht.set('key', 'govno');
        ht.set('key', 'value');

        expect(ht.get('key')).toEqual('value');
    });

    test('`has` method must return `false` if there is no value for such key', () => {
        const ht = new HashTable(hashString);

        expect(ht.has('key')).toEqual(false);
    });

    test('`has` method must return `true` if there is value for such key', () => {
        const ht = new HashTable(hashString);

        ht.set('key', 'value');

        expect(ht.has('key')).toEqual(true);
    });

    test('`delete` method must return `this`', () => {
        const ht = new HashTable(hashString);

        expect(ht.delete('key')).toBe(ht);
    });

    test('`delete` method must delete key—value pairs', () => {
        const ht = new HashTable(hashString);

        ht.set('key', 'value');
        ht.delete('key');

        expect(ht.has('key')).toEqual(false);
    });
});

describe('`StringTable` class', () => {
    test('`StringTable` must work as expected', () => {
        const st = new StringTable();

        st.set('key', 'value');

        expect(st.get('key')).toEqual('value');
    });
});
