
!!!

This document has **moved**.

You'll now find information like this in the [ipld/ipld](https://github.com/ipld/ipld/) meta-repo,
and published to the web at https://ipld.io/ .

All documentation, fixtures, specifications, and web content is now gathered into that repo.
Please update your links, and direct new contributions there.

!!!

----

# Getting Started with IPLD in JavaScript

In JS the primary interface for creating data in IPLD is
the `Block` API.

A block in IPLD is data paired with an address (CID). With the
`@ipld/block` API you can encode data directly into a block.

```js
import Block from '@ipld/block/defaults'

const person = { name: 'Mikeal Rogers' }
const childBlock = Block.encoder(person, 'dag-cbor')
const people = [ await childBlock.cid() ]
const rootBlock = Block.encoder(people, 'dag-cbor')
```

The `defaults.js` export gives us a Block interface with a few
basic codecs and hashing functions. One of those codecs is
`dag-cbor` which can encode all JSON types, binary, and IPLD
links (CIDs).

You can use blocks in your program and connect them to any
kind of storage or network layer you wish. As an example,
here's an in-memory block cache.

```js
const cache = new Map()
const store = {
  get: async cid => cache.get(cid.toString()),
  put: async block => cache.set((await block.cid()).toString(), block)
}

// childBlock and rootBlock from first example
await Promise.all([childBlock, rootBlock].map(b => store.put(b)))

const printPeople = async () => {
  const rootLink = await rootBlock.cid()
  const peopleBlock = await store.get(rootLink)
  const people = peopleBlock.decode()
  for (const link of people) {
    const block = await store.get(link)
    console.log(block.decode())
  }
}
printPeople()
```

This gives you an idea of what it's like to use links to connect
different pieces of data together. Links are also useful as a value
type. For instance, you can tell if two pieces of data are identical
by comparing their Links and never actually retreiving the data.

```js
const save = async obj => {
  const block = Block.encoder(obj, 'dag-cbor')
  await store.put(block)
  return block.cid()
}
const skating = await save('skating')
const rowing = await save('rowing')
const running = await save('running')

const mikeal = await save({ name: 'Mikeal', interests: [ skating ] })
const robert = await save({ name: 'Robert', interests: [ rowing, running ]})
const steve = await save({ name: 'Steve', interests: [ running, skating ] })

const compareInterests = async (person1, person2) => {
  const blocks = await Promise.all([person1, person2].map(cid => store.get(cid)))
  const [ decode1, decode2 ] = blocks.map(block => block.decode())
  const seen = new Set()
  const commonInterests = []
  decode1.interests.forEach(cid => seen.add(cid.toString()))
  for (const cid of decode2.interests) {
    if (seen.has(cid.toString())) {
      const block = await store.get(cid)
      commonInterests.push(block.decode())
    }
  }
  const people = `${decode1.name} and ${decode2.name}`
  if (commonInterests.length === 0) {
    console.log(`${people} have nothing in common.`)
  } else {
    console.log(`${people} have ${commonInterests.join(' and ')} in common`)
  }
}

await compareInterests(mikeal, robert)
await compareInterests(robert, steve)
await compareInterests(steve, mikeal)
```

Prints

```
Mikeal and Robert have nothing in common.
Robert and Steve have running in common.
Steve and Mikeal have skating in common.
```

## Storing IPLD data in IPFS

The easiest way to persist IPLD data so that it's globally availible
is to using the IPFS network.

The `js-ipfs` project has an API for storing block data at `ipfs.block`.

```js
import Block from '@ipld/block/defaults'
import IPFS from 'ipfs'

const ipfs = await IPFS.create()

const save = async obj => {
  const block = Block.encoder(obj, 'dag-cbor')
  const data = block.encode()
  const cid = await block.cid()

  // js-ipfs uses an older CID value type so we must convert to string
  await ipfs.block.put(data, { cid: cid.toString() })
  return cid
}

const mikeal = await save({ name: 'Mikeal', interests: [ skating ] })
const robert = await save({ name: 'Robert', interests: [ rowing, running ]})
const steve = await save({ name: 'Steve', interests: [ running, skating ] })

console.log('Seeding Mikeal as ', mikeal.toString())
console.log('Seeding Robert as ', robert.toString())
console.log('Seeding Steve as ', steve.toString())
```

TODO: `js-ipfs-lite`.
