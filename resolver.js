const comments = require("./models/comments");
const { dataLoader, fakeLoader } = require('./loader');
const { books } = require("./data")


const resolvers = {
  Query: {
    comments(parent, args, context, info) {
      return comments
        .find()
        .skip(4)
        .limit(5)
        .then((item) => item)
        .catch((err) => console.log(err));
    },
    books: () => books,
  },
  Book: {
		author: (parent, args, context, info) => {
      fakeLoader(parent);
		},
	},
  Comment: {
    movie_id: (parent) => {
			return dataLoader.load(parent.movie_id)
    }
  },
};

module.exports = resolvers;
