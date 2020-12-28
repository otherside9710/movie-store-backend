const User = require('../../../../../../src/domain/user/User');
const UserRepository = require('../../../../../../src/domain/user/UserRepository');
const mockUserRepository = new UserRepository();
const getUserById = require('../../../../../../src/application/use_cases/user/search/getUserById');
const expect = require('chai').expect;

test('should resolve with the corresponding persisted user entity', async () => {
    // given
    const correspondingUser = new User('5f18aa6310eba090863e76dc', 'admin', 'admin', 'john.doe@email.com', '1234567-k', '3024026718', 'M@st3r321.', 'ROLE_ADMIN');
    mockUserRepository.get = jest.fn((userId) => correspondingUser);

    // when
    const user = await getUserById('5f18aa6310eba090863e76dc', { userRepository: mockUserRepository });

    // then
    expect(mockUserRepository.get).toHaveBeenCalledWith('5f18aa6310eba090863e76dc');
    expect(user).toEqual(correspondingUser);
});