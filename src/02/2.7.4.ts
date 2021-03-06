/*

  Esercizio: tipizzare la funzione `get`

*/

export declare function get(k: never, o: never): never

// tests

import { AssertEquals } from '../equals'

// $ExpectError .
get('a', 1)
// $ExpectError .
get('a', {})
// $ExpectError .
get('a', { b: 1 })

const s1 = get('a', { a: 1 })
type S1 = AssertEquals<typeof s1, number, 'T'>
