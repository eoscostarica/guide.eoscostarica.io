---
id: graphql-tutorial
title: GraphQL
sidebar_label: GraphQL
description: Definition, usage, and funtionalities of GraphQL
keywords: [graphql, graphql definition, graphql usage, graphql functionality, GraphQL, GraphQL Definition, GraphQL Usage, GraphQL Functionality, How GraphQL Works, What is GraphQL, Queries and Mutations]
---

## Introduction

[GraphQL](https://graphql.org/) is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

## Queries and Mutations

### Fields
At its simplest, GraphQL is about asking for specific fields on objects. 


```graphql title="Input"
{
  lifebank {
	name
  }
}
```
```graphql title="Output"
{
  "data": {
	"lifebank": {
  		"name": "National Blood Bank"
	}
  }
}
```

This is essential to GraphQL, because you always get back what you expect, and the server knows exactly what fields the client is asking for.

### Arguments

Every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. You can even pass arguments into scalar fields, to implement data transformations once on the server, instead of on every client separately.

```graphql title="Input"
{
  lifebank(email: "blood@gmail.com") {
	telephone
    location	
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank": {
  	    "name": "National Blood Bank"
  	    "location": "Costa Rica",
	}
  }
}
```

GraphQL comes with a default set of types, but a GraphQL server can also declare its own custom types, as long as they can be serialized into your transport format.

### Aliases

Aliases allow you to rename the result of a field to whatever you want.

```graphql title="Input"
{
  mainLifebank: lifebank(email: "blood@gmail.com") {
	name
  }
  secondaryLifebank: lifebank(email: "secondaryblood@gmail.com") {
	name
  }
}
```

```graphql title="Output"
{
  "data": {
	"mainLifebank": {
  		"name": "National Blood Bank"
	},
	"secondaryLifebank": {
  		"name": "National Rescue Blood Bank"
	}
  }
}
```

### Fragments
GraphQL includes reusable units called fragments. Fragments let you construct sets of fields, and then include them in queries where you need to. 

```graphql title="Input"
{
  leftComparison: lifebank(email: "blood@gmail.com") {
	...comparisonFields
  }
  rightComparison: lifebank(email: "secondaryblood@gmail.com") {
	...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  location 
  telephone
}
```

```graphql title="Output"
{
  "data": {
	"leftComparison": {
    	"name": "National Blood Bank",
  	    "location": "Costa Rica",
	    "urgencyLevel": "high" 
	},
	"rightComparison": {
  		"name": "National Rescue Blood Bank",
  	    "location": "Costa Rica",
	    "urgencyLevel": "medium" 
	}
  }
}
```

The concept of fragments is frequently used to split complicated application data requirements into smaller chunks.


### Operation Name

The operation name is a meaningful and explicit name for your operation. It is only required in multi-operation documents, but its use is encouraged because it is very helpful for debugging and server-side logging. 

```graphql title="Input"
query LifebankNameAndPhotos {
  lifebank{
	name
	photos {
  		url
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank": {
  	    "name": "National Blood Bank",
  	    "photos": [
    	    {
      		    "url": "photo1.png"
    	    },
    	    {
      		    "url": "photo2.png"
    	    },
    	    {
      		    "url": "photo3.png"
    	    }
        ]
	}
  }
}
```

When something goes wrong it is easier to identify a query in your codebase by name instead of trying to decipher the contents. 

### Variables
GraphQL has a first-class way to factor dynamic values out of the query, and pass them as a separate dictionary. These values are called variables.

When we start working with variables, we need to do three things:

- Replace the static value in the query with `$variableName`.
- Declare `$variableName` as one of the variables accepted by the query.
- Pass variableName: value in the separate, transport-specific (usually JSON) variables dictionary.

```graphql title="Variables"
{
  "email": "blood@gmail.com"
}
```

```graphql title="Input"
query LifebankNameAndPhotos($email: Lifebank) {
  lifebank(email: $email) {
	name
	photos {
  		url
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank": {
  	    "name": "National Blood Bank",
  	    "photos": [
    	    {
      		    "url": "photo1.png"
    	    },
    	    {
      	    	"url": "photo2.png"
    	    },
    	    {
      	    	"url": "photo3.png"
        	}
        ]
	}
  }
}
```

### Directives

A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires. The core GraphQL specification includes exactly two directives, which must be supported by any spec-compliant GraphQL server implementation:

- `@include`(if: Boolean) Only include this field in the result if the argument is true.
- `@skip`(if: Boolean) Skip this field if the argument is true.

```graphql title="Variables"
{
    "email": "blood@gmail.com",
	"withPhotos": false
}
```

```graphql title="Input"
query Lifebank($email: Lifebank, $withPhotos: Boolean!) {
  lifebank(name: $email) {
	name
	photos @include(if: $withPhotos) {
  		url
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank": {
  	"name": "National Blood Bank" 
   }
}
```

### Mutations

Any query could be implemented to cause a data write. However, it is useful to establish a convention that any operation that causes writes must be explicitly sent through a mutation.

```graphql title="Variables"
{
  "email": "blood@gmail.com",
  "urgencyLevel": "high"
}
```

```graphql title="Input"
mutation ChangeUrgencyLevel($ep: Episode!, $review: ReviewInput!) {
  updateUrgencyLevel(email: $email, urgencyLevel: $urgencyLevel) {
	urgencyLevel
  }
}
```

```graphql title="Output"
{
  "data": {
	"updateUrgencyLevel": {
  	"urgencyLevel": "high",
	}
  }
}
```

Similar to queries, if the mutation field returns an object type, you can request nested fields. This can be useful to get the new state of an object after an update.


### Inline Fragments

If you are querying a field that returns an interface or a union type, you will need to use inline fragments to access data on the underlying concrete type.

```graphql title="Variables"
{
  "ep": "JEDI"
}
```

```graphql title="Input"
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
	name
	... on Droid {
  	primaryFunction
	}
	... on Human {
  	height
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"hero": {
  	"name": "R2-D2",
  	"primaryFunction": "Astromech"
	}
  }
}
```

## Schema and Types

### Type System

Every GraphQL service defines a set of types which completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated and executed against that schema.

```graphql title="Input"
{
  lifebank {
	name
	email
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank ": {
  	“name": "National Blood Bank",
  	"email": "blood@gmail.com"
	}
  }
}
```

### Type Language

GraphQL services can be written in any language. The "GraphQL schema language" - it's similar to the query language, and allows us to talk about GraphQL schemas in a language-agnostic way.

### Object Types and Fields
The most basic components of a GraphQL schema are object types. In the GraphQL schema language, we might represent it like this:

```graphql title="Input"
type Character {
 name: String!
 appearsIn: [Episode!]!
}
```

- `Character` is a GraphQL Object Type, meaning it's a type with some fields. Most of the types in your schema will be object types.

- `name` and `appearsIn` are fields on the Character type. That means that name and appearsIn are the only fields that can appear in any part of a GraphQL query that operates on the ‘Character’ type.

- `String` is one of the built-in scalar types - these are types that resolve to a single scalar object, and can't have sub-selections in the query.

- `[Episode!]!` represents an array of Episode objects. Since it is also non-nullable, you can always expect an array (with zero or more items) when you query the ‘appearsIn’ field. 

### Arguments

Every field on a GraphQL object type can have zero or more arguments. All arguments in GraphQL are passed by name specifically,  can be either required or optional. When an argument is optional, we can define a default value - if the unit argument is not passed, it will be set to METER by default.

```graphql title="Input"
type Starship {
 id: ID!
 name: String!
 length(unit: LengthUnit = METER): Float
}
```

### The Query and Mutation Types
Every GraphQL service has a query type and may or may not have a mutation type. These types are the same as a regular object type, but they are special because they define the entry point of every GraphQL query. 

```graphql title="Schema"
schema {
 query: Query
 mutation: Mutation
}
```

```graphql title="Input"
query {
  hero {
	name
  }
  droid(id: "2000") {
	name
  }
}
```

```graphql title="Output"
{
  "data": {
	"hero": {
  		"name": "R2-D2"
	},
	"droid": {
  		"name": "C-3PO"
	}
  }
}
```

Mutations work in a similar way - you define fields on the Mutation type, and those are available as the root mutation fields you can call in your query.

### Scalar Types

Scalar types  represent the leaves of the query. We know this because those fields don't have any sub-fields - they are the leaves of the query.

```graphql title="Input"
{
  hero {
	name
	appearsIn
  }
}
```

```graphql title="Output"
{
  "data": {
	"hero": {
  	   "name": "R2-D2",
  	   "appearsIn": [
    	   "NEWHOPE",
    	   "EMPIRE",
    	   "JEDI"
  	    ]
	}
  }
}
```

GraphQL comes with a set of default scalar types out of the box:

- `Int`: A signed 32‐bit integer.
- `Float`: A signed double-precision floating-point value.
- `String`: A UTF‐8 character sequence.
- `Boolean`: true or false.
- `ID`: The ID scalar type represents a unique identifier The ID type is serialized in the same way as a String.

### Enumeration Types

Also called Enums, enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. This allows you to:

- Validate that any arguments of this type are one of the allowed values.
- Communicate through the type system that a field will always be one of a finite set of values.

```graphql title="Enum"
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```

### Lists and Non-Null

The Non-Null type modifier be used when defining arguments for a field, which will cause the GraphQL server to return a validation error if a null value is passed as that argument, whether in the GraphQL string or in the variables.

Lists work in a similar way: We can use a type modifier to mark a type as a List, which indicates that this field will return an array of that type.

The Non-Null and List modifiers can be combined. 

```graphql title="Type"
type Character {
  name: String!
  appearsIn: [Episode]!
}
```

```graphql title="Variables"
{
  "id": null
}
```

```graphql title="Input"
query DroidById($id: ID!) {
  droid(id: $id) {
	name
  }
}
```

```graphql title="Output"
{
  "errors": [
    {
  	   "message": "Variable \"$id\" of non-null type \"ID!\" must not be null.",
  	   "locations": [
    	{
      	  "line": 1,
      	  "column": 17
    	}
  	]
	}
  ]
}
```

### Interfaces

An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.

```graphql title="Interface"
interface Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
}
```

```graphql title="Example 1"
type Human implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
  totalCredits: Int
}
```

```graphql title="Example 2"
type Droid implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  primaryFunction: String
}
```

Interfaces are useful when you want to return an object or set of objects.

### Union Types
Union types are very similar to interfaces, but they don't get to specify any common fields between the types.

```graphql title="Union"
union SearchResult = Human | Droid | Starship
```

```graphql title="Input"
{
  search(text: "an") {
	__typename
	... on Human {
  	    name
  	    height
	}

	... on Droid {
  	    name
  	    primaryFunction
	}

	... on Starship {
  	    name
        length
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"search": [
  	{
    	"__typename": "Human",
    	"name": "Han Solo",
    	"height": 1.8
  	},
  	{
    	"__typename": "Human",
    	"name": "Leia Organa",
    	"height": 1.5
  	},
  	{
    	"__typename": "Starship",
    	"name": "TIE Advanced x1",
    	"length": 9.2
  	}
	]
  }
}
```

### Input Types

In the GraphQL schema language, input types look exactly the same as regular object types, but with the keyword input instead of type.

```graphql title="Input Type"
input ReviewInput {
 stars: Int!
 commentary: String
}
```

```graphql title="Variables"
{
  "ep": "JEDI",
  "review": {
	"stars": 5,
	"commentary": "This is a great movie!"
  }
}
```

```graphql title="Input"
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
	stars
	commentary
  }
}
```
```graphql title="Output"
{
  "data": {
	"createReview": {
  	"stars": 5,
  	"commentary": "This is a great movie!"
	}
  }
}
```

The fields on an input object type can themselves refer to input object types, but you can't mix input and output types in your schema. Input object types also can't have arguments on their fields.

## Execution

After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON.

```graphql title="Type System"
type Query {
    human(id: ID!): Human
}

type Human {
    name: String
    appearsIn: [Episode]
    starships: [Starship]
}

enum Episode {
    NEWHOPE
    EMPIRE
    JEDI
}

type Starship {
    name: String
}
```

```graphql title="Input"
{
  human(id: 1002) {
	name
	appearsIn
	starships {
    	name
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"human": {
  	    "name": "Han Solo",
  	    "appearsIn": [
    	    "NEWHOPE",
    	    "EMPIRE",
    	    "JEDI"
  	    ],
  	    "starships": [
    	{
      	    "name": "Millenium Falcon"
    	},
    	{
        	"name": "Imperial shuttle"
    	}
  	    ]
	}
  }
}
```

Each field on each type is backed by a function called the resolver which is provided by the GraphQL server developer. When a field is executed, the corresponding resolver is called to produce the next value.

## Language Support

### Top 5

1. [JavaScript](https://www.javascript.com)
2. [Go](https://golang.org)
3. [PHP](https://www.php.net)
4. [Python](https://www.python.org)
5. [Java](https://www.java.com/en/)

### JavaScript

#### Serve

- **GraphQL.js:** The reference implementation of the GraphQL specification, designed for running GraphQL in a Node.js environment.
- **Apollo Server:** A set of GraphQL server packages from Apollo that work with various Node.js HTTP frameworks (Express, Connect, Hapi, Koa etc).

#### Client

- **Apollo Client:** A powerful JavaScript GraphQL client, designed to work well with React, React Native, Angular 2, or just plain JavaScript.
- **GraphQL Request:** A simple and flexible JavaScript GraphQL client that works in all JavaScript environments (the browser, Node.js, and React Native) - basically a lightweight wrapper around fetch. 

### Tools
- **GraphiQL:** An interactive in-browser GraphQL IDE.
- **GraphQL CLI:** A command line tool for common GraphQL development workflows.


#### Services

- [**Apollo:**](https://guide.eoscostarica.io/docs/developer-tools#apollo) A cloud service for monitoring the performance and usage of your GraphQL backend.
- [**Hasura:**](https://guide.eoscostarica.io/docs/developer-tools#hasura) Hasura connects to your databases and microservices and instantly gives you a production-ready GraphQL API.
- [**Postman:**](https://guide.eoscostarica.io/docs/developer-tools#postman) An HTTP Client that supports editing GraphQL queries.
