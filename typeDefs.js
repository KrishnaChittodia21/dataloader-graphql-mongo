const apollo = require("apollo-server-express");

const gql = apollo.gql;

const typeDefs = gql`
  type Query {
    comments: [Comment]
    commentBetter: [Comment]
    books: [Book]
  }

  type Comment {
    name: String
    email: String
    movie_id: Movie
  }

  type Movie {
    title: String
    rated: String
    year: Int
  }

  type Book {
		id: ID
		title: String
		author: Author
	}

	type Author {
		name: String
		email: String
	}
`;

module.exports = typeDefs;
