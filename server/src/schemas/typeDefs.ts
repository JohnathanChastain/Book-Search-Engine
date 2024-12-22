import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
        description: String
        publishedDate: String
    }

    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Auth {
        token: String!
        user: User!
    }

    input BookInput {
        author: [String]!
        description: String
        title: String!
        bookId: String!
        image: String
        link: String
    }

    type Query {
        books: [Book]
        book(id: ID!): Book
        user(id: ID!): User
    }

    type Mutation {
        addBook(title: String!, author: String!, description: String, publishedDate: String): Book
        updateBook(id: ID!, title: String, author: String, description: String, publishedDate: String): Book
        deleteBook(id: ID!): Book
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: BookInput!): User
        removeBook(bookId: String!): User
    }
`;

export default typeDefs;