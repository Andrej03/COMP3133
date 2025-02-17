const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Movie {
        mid: Int
        name: String
        director_name: String
        production_house: String
        release_date: String
        rating: Float
    }

    type Query {
        movies: [Movie!]!
        getMovie(mid: Int!): Movie
    }
    
    type Mutation {
        addMovie(
            mid: Int!, 
            name: String!, 
            director_name: String!, 
            production_house: String!, 
            release_date: String!, 
            rating: Float!
        ): Movie

        deleteMovie(mid: Int!): Movie

        updateMovie(mid: Int!): Movie
    } 
`;

module.exports = typeDefs;
