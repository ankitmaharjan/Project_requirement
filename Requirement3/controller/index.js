(() => {
    module.exports = {
        userSignup: require('./signup'),
        loginUser: require('./login'),
        deleteUser: require('./autodelete')
    };
    })();