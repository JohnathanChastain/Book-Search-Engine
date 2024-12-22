import { IResolvers } from 'graphql-tools';
import { Book } from '../models/Book';
import { User } from '../models/User';

const resolvers: IResolvers = {
    Query: {
        books: async () => {
            return await Book.find();
        },
        book: async (_parent, { id }) => {
            return await Book.findById(id);
        },
        users: async () => {
            return await User.find();
        },
        user: async (_parent, { id }) => {
            return await User.findById(id);
        },
    },
    Mutation: {
        addBook: async (_parent, { title, author }) => {
            const book = new Book({ title, author });
            return await book.save();
        },
        updateBook: async (_parent, { id, title, author }) => {
            return await Book.findByIdAndUpdate(id, { title, author }, { new: true });
        },
        deleteBook: async (_parent, { id }) => {
            return await Book.findByIdAndRemove(id);
        },
        addUser: async (_parent, { name, email }) => {
            const user = new User({ name, email });
            return await user.save();
        },
        updateUser: async (_parent, { id, name, email }) => {
            return await User.findByIdAndUpdate(id, { name, email }, { new: true });
        },
        deleteUser: async (_parent, { id }) => {
            return await User.findByIdAndRemove(id);
        },
    },
};

export default resolvers;