(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"interplanetary-linked-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interplanetary-linked-data"}},[t._v("#")]),t._v(" InterPlanetary Linked Data")]),t._v(" "),a("p",[t._v("Welcome to the internet of data structures!")]),t._v(" "),a("h2",{attrs:{id:"what-is-ipld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-ipld"}},[t._v("#")]),t._v(" What is IPLD?")]),t._v(" "),a("p",[t._v("IPLD isn't a project or a library, it's an ecosystem. An\necosystem of formats and data structures for building\napplications that can be fully decentralized.")]),t._v(" "),a("p",[t._v("This ecosystem is held together by a few concepts and\nstandards that ensure compatibility between formats\nand programming languages.")]),t._v(" "),a("p",[t._v("You'll find numerous libraries for working with IPLD.\nYou may even create a few of your own. That library is\npart of the IPLD ecosystem and you're now a part of its\ncommunity. You don't need to be a committer in repository\nin the IPLD GitHub org to be a part of this community,\nyou're already almost there just by reading this far.")]),t._v(" "),a("h2",{attrs:{id:"from-data-to-data-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-data-to-data-structures"}},[t._v("#")]),t._v(" From Data to Data Structures")]),t._v(" "),a("p",[t._v("Hashes are wonderful.")]),t._v(" "),a("p",[t._v("If you hash something you can give that hash to anyone else\nin the world, anywhere in the galaxy (IP stands for Interplanetary),\nthey can tell if they have that data and when they send\nit to you, you're able to verify it was the right data even\nwithout trusting that person.")]),t._v(" "),a("p",[t._v("If you think of hashes like URLs, you can pass them around and\nask people for them without fixing the place where that data exists\ninto the link the way you do with a URL. This is really powerful,\nbut by itself it's a bit limited.")]),t._v(" "),a("p",[t._v("For one thing, there are lots of hash algorithms, and they keep\ngetting better. A hash doesn't say "),a("em",[t._v("what")]),t._v(" sort of hash it is. We\nsolved that with something called "),a("a",{attrs:{href:"https://github.com/multiformats/multihash",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("multihash")]),a("OutboundLink")],1),t._v('\nwhich is just a hash that says "I\'m a hash of this particular\nalgorithm."')]),t._v(" "),a("p",[t._v('So now, with multihash, a single identifier can get us any set\nof binary data (what we all a "Block") from anywhere in the world.')]),t._v(" "),a("p",[t._v("That's "),a("em",[t._v("data")]),t._v(", we've got that covered, but now we need to go from\n"),a("em",[t._v("data")]),t._v(" to "),a("strong",[t._v("data structures")]),t._v(".")]),t._v(" "),a("p",[t._v("This means that we have to think about different formats (JSON, CBOR,\nBitcoin, Ethereum, etc) and we also need to think about different\nprogramming languages (JavaScript, Go, Rust, etc) because these\nlanguages have different basic types that are used to represent data\nstructures in-memory.")]),t._v(" "),a("p",[t._v("That's IPLD.")]),t._v(" "),a("p",[t._v("IPLD is how we go from "),a("em",[t._v("data")]),t._v(" to "),a("strong",[t._v("data structures")]),t._v(".")]),t._v(" "),a("p",[t._v("We do this with a new link type and a data model.")]),t._v(" "),a("p",[t._v("For links we use a "),a("a",{attrs:{href:"https://specs.ipld.io/block-layer/CID.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CID"),a("OutboundLink")],1),t._v(". A CID is an extension of "),a("code",[t._v("multihash")]),t._v(",\nin fact a "),a("code",[t._v("multihash")]),t._v(" is part of a "),a("code",[t._v("CID")]),t._v(". All we extend it with\nis a "),a("em",[t._v("codec")]),t._v(" that tells us what format the data is in (JSON, CBOR,\nBitcoin, Ethereum, etc). This way, we can actually link between\ndata in different formats and any link to data anyone ever gives\nus can be decoded so that it can become more than just a series\nof bytes.")]),t._v(" "),a("p",[t._v("CID is a "),a("a",{attrs:{href:""}},[t._v("standard")]),t._v(" that anyone can implement, even people that\nhave no other interest in IPLD beyond the need for hash links to\ndifferent data types can use it.")]),t._v(" "),a("p",[t._v("The IPLD Data Model is a bit more conceptual, as it is applied\nto formats that had never considered IPLD.")]),t._v(" "),a("p",[t._v("Every language has a library for JSON encoding and decoding. These\nlanguages all adapt the JSON data model (types) into whatever the\nbest fit for their language is. Our data model is very similar,\nbut we add a few more types.")]),t._v(" "),a("p",[t._v("First, we add a link type using CID as our link format. We also\nadd binary values, which are missing from JSON. We support nothing\nbeyond that other than the types JSON has already defined quite well.")]),t._v(" "),a("p",[t._v("We then apply this data model to more than just our own formats. We\nhave specifications and libraries for interpreting many formats into\nthis data model. For instance, Bitcoin blocks know nothing about IPLD\nsince they were designed long before IPLD existed. We have a decoder\nfor Bitcoin that presents the data found in a Bitcoin block as IPLD\nData Model.")]),t._v(" "),a("p",[t._v("This provides a consistent interpretation of all formats across all programming\nlanguages in IPLD terms. For instance, the links in Bitcoin blocks are\nonly to other Bitcoin blocks and do not use CID's internally, but when\nyou use an IPLD codec to read them the links will all be normalized\nto CID's that link to Bitcoin blocks.")]),t._v(" "),a("p",[t._v("This lets you build data structures that freely link between formats\nthat can be traversed though a normalized data model. Effectively,\nyou can write format agnostic tools for reading, distributing, and\npersisting all content addressed data.")]),t._v(" "),a("h2",{attrs:{id:"tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[t._v("#")]),t._v(" Tutorial")]),t._v(" "),a("p",[t._v("We highly recommend you read the following tutorial\nbefore trying to use IPLD. This tutorial is language\nagnostic and includes examples in JavaScript, Go and Rust.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/tutorial.html"}},[t._v("Thinking in Data Structures")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/tutorial.html#addressing"}},[t._v("Addressing")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/tutorial.html#linking"}},[t._v("Linking")])],1)])],1)]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("Using IPLD can vary from language to language.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./getting-started/js"}},[t._v("Getting started in JavaScript")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./getting-started/js#storing-ipld-data-in-ipfs"}},[t._v("Persisting IPLD data in "),a("code",[t._v("js-ipfs")]),t._v(" and "),a("code",[t._v("js-ipfs-lite")])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"./getting-started/go"}},[t._v("Getting started in Go")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./getting-started/go#IPFS"}},[t._v("Persisting IPLD data in "),a("code",[t._v("go-ipfs")])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"./getting-started/rust"}},[t._v("Getting started in Rust")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./getting-started/rust#IPFS"}},[t._v("Persisting IPLD data in "),a("code",[t._v("rust-ipfs")])])])])])]),t._v(" "),a("h2",{attrs:{id:"media"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media"}},[t._v("#")]),t._v(" Media")]),t._v(" "),a("p",[a("a",{attrs:{href:"./docs/media"}},[t._v("Talks, blog posts, and other media about IPLD.")])]),t._v(" "),a("h2",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),a("h3",{attrs:{id:"getting-things-done-in-ipld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-things-done-in-ipld"}},[t._v("#")]),t._v(" Getting things done in IPLD")]),t._v(" "),a("p",[a("a",{attrs:{href:"./docs/gtd"}},[t._v("Great guide")]),t._v(" for how to approach IPLD depending on the problem\nyou're trying to solve.")]),t._v(" "),a("h3",{attrs:{id:"ipld-in-the-interplanetary-ecosystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld-in-the-interplanetary-ecosystem"}},[t._v("#")]),t._v(" IPLD in the Interplanetary Ecosystem")]),t._v(" "),a("p",[t._v("Details of how "),a("a",{attrs:{href:"./ecosystem"}},[t._v("IPLD fits into the ecosystem of IPFS")]),t._v(" and other decentralized\ntechnologies.")]),t._v(" "),a("h3",{attrs:{id:"ipld-objectives-and-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld-objectives-and-scope"}},[t._v("#")]),t._v(" IPLD Objectives and Scope")]),t._v(" "),a("p",[a("a",{attrs:{href:"./docs/objectives"}},[t._v("IPLD's unique worldview")]),t._v(" and the boundaries of what IPLD is intended to solve.")]),t._v(" "),a("h3",{attrs:{id:"ipld-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld-schemas"}},[t._v("#")]),t._v(" IPLD Schemas")]),t._v(" "),a("p",[t._v("IPLD has a "),a("a",{attrs:{href:"https://specs.ipld.io/schemas/",target:"_blank",rel:"noopener noreferrer"}},[t._v("powerful schema language"),a("OutboundLink")],1),t._v(" that is extensively\ndocumented.")]),t._v(" "),a("h3",{attrs:{id:"advanced-data-layouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-data-layouts"}},[t._v("#")]),t._v(" Advanced Data Layouts")]),t._v(" "),a("p",[t._v("Guide to "),a("a",{attrs:{href:"'./docs/advanced-layouts"}},[t._v("data structures that move beyond our simple data model")]),t._v("\nrepresentations.")]),t._v(" "),a("h3",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("p",[a("a",{attrs:{href:"./FAQ"}},[t._v("Frequently Asked Questions.")])]),t._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),a("h3",{attrs:{id:"blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[t._v("#")]),t._v(" Blocks")]),t._v(" "),a("p",[t._v('The term "block" is used to refer to the pairing of a raw binary and a CID. In other words, it\'s\ndata that has not been decoded yet, or data that has just recently been encoded.')]),t._v(" "),a("p",[t._v("Most users don't work directly with blocks. Instead, block data is encoded/decoded into "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(". It's only if your'e writing a database, or a filesystem, or a replicator that you will work directly\nwith blocks.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/block.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full Block specification."),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"cid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cid"}},[t._v("#")]),t._v(" CID")]),t._v(" "),a("p",[t._v("CID is a Content IDentifier. It's self-describing data structure identifier. In other\nwords, it's a hash that says what kind of hash it is and how to decode it.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/CID.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD CID Specification."),a("OutboundLink")],1),t._v(" The "),a("a",{attrs:{href:"https://github.com/multiformats/cid",target:"_blank",rel:"noopener noreferrer"}},[t._v("full format specification"),a("OutboundLink")],1),t._v(" is part of multi-formats.")]),t._v(" "),a("h3",{attrs:{id:"codecs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codecs"}},[t._v("#")]),t._v(" Codecs")]),t._v(" "),a("p",[t._v('The term "codec" refers to a '),a("a",{attrs:{href:""}},[t._v("mutlicodec")]),t._v(" specific encoder/decoder.")]),t._v(" "),a("p",[t._v("A codec is responsible for encoding "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" to Binary and for\ndecoding Binary to "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(".")]),t._v(" "),a("p",[t._v("Examples:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#DAG-CBOR"}},[t._v("dag-cbor")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DAG-JSON"}},[t._v("dag-json")])]),t._v(" "),a("li",[t._v("bitcoin")]),t._v(" "),a("li",[t._v("cbor")]),t._v(" "),a("li",[t._v("json")])]),t._v(" "),a("h4",{attrs:{id:"dag-cbor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag-cbor"}},[t._v("#")]),t._v(" DAG-CBOR")]),t._v(" "),a("p",[t._v("IPLD Data Model implemented as a subset of CBOR with additional constraints\nfor hash consistent representations.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/codecs/dag-cbor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full DAG-CBOR specification."),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"dag-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag-json"}},[t._v("#")]),t._v(" DAG-JSON")]),t._v(" "),a("p",[a("strong",[t._v("Not Recommended.")])]),t._v(" "),a("p",[t._v("IPLD Data Model implemented serialized to JSON.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/codecs/dag-json.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full DAG-JSON specification."),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data Model")]),t._v(" "),a("p",[t._v("The Data Model describes common base types called "),a("em",[t._v("kinds")]),t._v(".")]),t._v(" "),a("p",[t._v("These "),a("em",[t._v("kinds")]),t._v(" allow IPLD to create data structures using simple types\naccessible across many programming languages and encoding formats.")]),t._v(" "),a("p",[t._v("Using the Data Model we can implement file systems, databases, and custom\napplication data structures in a format agnostic way and even link between\nthese structures and formats using commong toolchains.")]),t._v(" "),a("p",[t._v("All JSON types are Data Model kinds:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("map")])]),t._v(" "),a("li",[a("code",[t._v("list")])]),t._v(" "),a("li",[a("code",[t._v("boolean")]),t._v(" (true, false)")]),t._v(" "),a("li",[a("code",[t._v("null")])]),t._v(" "),a("li",[a("code",[t._v("string")]),t._v(" (utf8)")]),t._v(" "),a("li",[a("code",[t._v("numbers")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("int")])]),t._v(" "),a("li",[a("code",[t._v("float")])])])])]),t._v(" "),a("p",[t._v("There is a "),a("code",[t._v("bytes")]),t._v(" kind for raw binary data.")]),t._v(" "),a("p",[t._v("Finally, there is a "),a("code",[t._v("link")]),t._v(" kind represented by a "),a("a",{attrs:{href:"#CID"}},[t._v("CID")]),t._v(". You'll find\nCID type implementations for every programming language which are leveraged\nby all IPLD codecs in that language.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/data-model-layer/data-model.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full IPLD Data Model specification."),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"hamt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hamt"}},[t._v("#")]),t._v(" HAMT")]),t._v(" "),a("p",[t._v("HAMT stands for "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash_array_mapped_trie",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Hash Array Mapped Trie"'),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v('HAMT\'s in IPLD differ from typical in-memory implementation as we require the use of "buckets"\nto manage performance.')]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/data-structures/hashmap.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full IPLD HAMT specification."),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"graphsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphsync"}},[t._v("#")]),t._v(" Graphsync")]),t._v(" "),a("p",[t._v("Graphsync is a replication protocol for IPLD. It's used heavily by Filecoin and experimentally by\nIPFS.")]),t._v(" "),a("p",[t._v("Graphsync uses "),a("a",{attrs:{href:"#selectors"}},[t._v("IPLD Selectors")]),t._v(" to replicate sections of a larger IPLD graph.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/graphsync/graphsync.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full Graphsync specification."),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"selectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selectors"}},[t._v("#")]),t._v(" Selectors")]),t._v(" "),a("p",[t._v("Selectors define a selection criteria for IPLD graph queries.")]),t._v(" "),a("p",[t._v("IPLD Selectors are a declarative format for specifying a walk over a "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(' graph --\nwhat nodes to walk over (or not), recursively; and, some positions to "visit" (with a callback, typically, though library implementation details may vary).\nYou can think of Selectors as being roughly like "regexps for graphs".')]),t._v(" "),a("p",[t._v("Selectors are natively implemented in most IPLD libraries (for performance reasons),\nbut the format itself is standardized.\nThe format is described in IPLD (using "),a("a",{attrs:{href:"https://specs.ipld.io/schemas/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD Schemas"),a("OutboundLink")],1),t._v(",\nso it's possible to serialize Selectors in any "),a("a",{attrs:{href:"#codecs"}},[t._v("Codec")]),t._v(" you want,\nand it's also possible to inspect (and transform!) Selector documents using standard "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" tools.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/selectors/selectors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full IPLD Selectors specification."),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),a("p",[t._v("You can refer to the "),a("a",{attrs:{href:""}},[t._v("specifications website")]),t._v(" for a full list of content.")]),t._v(" "),a("p",[t._v("There are numerous links to specifications throughout this documentation site.")]),t._v(" "),a("p",[t._v("The following curated list of specification pages may be of interest to those\nseeking additional forms of documentation.")]),t._v(" "),a("h3",{attrs:{id:"theory-of-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theory-of-change"}},[t._v("#")]),t._v(" Theory of Change")]),t._v(" "),a("h3",{attrs:{id:"design-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-documents"}},[t._v("#")]),t._v(" Design Documents")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/design/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Various documents about the design, and history of design thought, in and around\nIPLD."),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"foundational-principals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foundational-principals"}},[t._v("#")]),t._v(" Foundational Principals")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/foundations.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The foundation principals of globally content addressed data structures."),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"ipld-team"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld-team"}},[t._v("#")]),t._v(" IPLD Team")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/#ipld-team",target:"_blank",rel:"noopener noreferrer"}},[t._v("List of IPLD team members."),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);