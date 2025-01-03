import { IResolvers } from '@graphql-tools/utils';
import { Book } from '../models/Book';
import { User } from '../models/User';

const resolvers: IResolvers = {
    Query: {
        books: async () => {
            return await Book.find({});
        },
        book: async (_parent: any, { id }: any) => {
            return await Book.findById(id);
        },
        users: async () => {
            return await User.find();
        },
        user: async (_parent: any, { id }: any) => {
            return await User.findById(id);
        },
    },
    Mutation: {
        addBook: async (_parent: any, { title, author }: any) => {
            const book = new Book({ title, author });
            return await book.save();
        },
        updateBook: async (_parent: any, { id, title, author }: any) => {
            return await Book.findByIdAndUpdate(id, { title, author }, { new: true });
        },
        deleteBook: async (_parent: any, { id }: any) => {
            return await Book.findByIdAndRemove(id);
        },
        addUser: async (_parent: any, { name, email }: any) => {
            const user = new User({ name, email });
            return await user.save();
        },
        updateUser: async (_parent: any, { id, name, email }: any) => {
            return await User.findByIdAndUpdate(id, { name, email }, { new: true });
        },
        deleteUser: async (_parent: any, { id }: any) => {
            return await User.findByIdAndRemove(id);
        },
    },
};

export default resolvers;

