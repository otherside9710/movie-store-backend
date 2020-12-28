const UserRepository = require('../../../../../../src/domain/user/UserRepository');
const mockUserRepository = new UserRepository();
const getAllUsers = require('../../../../../../src/application/use_cases/user/search/getAllUsers');
const expect = require('chai').expect;

test('should resolve with all the users persisted in repository', async () => {
    // given
    mockUserRepository.find = () => ['Pedro', 'Juan'];

    // when
    const users = await getAllUsers({ userRepository: mockUserRepository });
    // then
    expect(users).to.deep.equal(['Pedro', 'Juan']);
});