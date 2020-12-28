'use strict';

module.exports = async (email, password, {userRepository, accessTokenManager}) => {
    const user = await userRepository.getByEmail(email);
    console.log(user);
    if (!user || user.password !== password) {
        throw new Error('Bad credentials');
    }
    return {
        token: accessTokenManager.generate({uid: user.id}),
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            rut: user.firstName,
            phone: user.firstName,
            role: user.role,
            crated_at: user.created_at
        }
    };
};
