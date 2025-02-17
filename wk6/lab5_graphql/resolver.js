const Movies = require('./model/moviesSchema');

// id, name, director_name, production_house, release_date, and rating. 
const resolvers = {
    Query: {
      // Fetch all movies from the database
      movies: async () => {
        try {
          const movies = await MovieModel.find({});
          console.log(movies);
          return movies;
        } catch (error) {
          throw new Error("Failed to fetch movies");
        }
      },
      // Fetch a single movie by its movie id
      getMovie: async (_, { mid }) => {
        try {
          console.log("Getting movie with mid:", mid);
          const movie = await MovieModel.findOne({ mid });
          return movie;
        } catch (error) {
          throw new Error("Failed to fetch movie");
        }
      }
    },
    Mutation: {
      // Create a new movie
      addMovie: async (_, { input }) => {
        try {
          console.log("Adding movie:", input);
          const { mid, name, director_name, production_house, release_date, rating } = input;
          const newMovie = new MovieModel({
            mid,
            name,
            director_name,
            production_house,
            release_date,
            rating,
          });
          await newMovie.save();
          return newMovie;
        } catch (error) {
          throw new Error("Failed to add movie");
        }
      },
      // Delete an existing movie
      deleteMovie: async (_, { mid }) => {
        try {
          console.log("Deleting movie with mid:", mid);
          const movie = await MovieModel.findOne({ mid });
          if (!movie) {
            throw new Error("Movie not found");
          }
          await movie.remove();
          return movie;
        } catch (error) {
          throw new Error("Failed to delete movie");
        }
      },
      // Update the name of an existing movie
      updateMovie: async (_, { mid, input }) => {
        try {
          console.log("Updating movie with mid:", mid, "with data:", input);
          const movie = await MovieModel.findOne({ mid });
          if (!movie) {
            throw new Error("Movie not found");
          }
          movie.name = input.name;
          await movie.save();
          return movie;
        } catch (error) {
          throw new Error("Failed to update movie");
        }
      },
    },
  };
  
  module.exports = resolvers;
  