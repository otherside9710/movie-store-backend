const getAllMovies = require('../../../../../../src/application/use_cases/movie/search/getAllMovies');
const movieRepository = require('../../../../../../src/domain/movie/MovieRepository');

describe('getAllMovies unit test', () => {
    test('should resolve with all the movies persisted in repository', async () => {
        const moviesMock = [
            {
                id: "123",
                title: "The silence of the lambs",
                generalDescription: "Real thriller movie, bro.",
                actorList: ["Anthony Hopkins", "Jodie Foster", "Ted Levine"],
                directors: ["Jonathan Demme", "Tim Galvin"],
                quantity: 13,
                price: 1000,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: "124",
                title: "Shutter Island",
                generalDescription: "Real thriller movie, bro.",
                actorList: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
                directors: ["Martin Scorsese"],
                quantity: 12,
                price: 1200,
                created_at: new Date(),
                updated_at: new Date()
            }
        ];

        const mockMovieRepository = new movieRepository();
        mockMovieRepository.find = () => moviesMock;

        const movies = await getAllMovies({movieRepository: mockMovieRepository});

        expect(movies).toEqual(moviesMock);
    });
});

