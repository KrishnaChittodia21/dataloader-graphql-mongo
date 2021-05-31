const DataLoader = require("dataloader");
const movies = require("./models/movies");
const { authors } = require("./data")

const dataLoader = new DataLoader(keys => batchFunction(keys));

const batchFunction = async (keys) => {
  console.log(`fetching movies with ids ${keys}`)
  const results = await movies.find({ _id: { $in: keys}})
  return keys.map(key => results.find((result)=> {
    return result._id.toString() === key.toString()
  }))
}

const fakeLoader = (parent) => {
  console.log(`fetching author with id ${parent.author}`)
	return authors.find((author) => author.id === parent.author)
}

module.exports = { dataLoader, fakeLoader};
