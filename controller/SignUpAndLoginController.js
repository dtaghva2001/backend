
export const SignUpAndLoginController = {
    sign_up: (req, res) => {
        const { username, email, password } = req.body;
        console.log('username:' + username)
        res.json({ message: 'Sign-up successful', user: { username, email } });

    },
    login: (req, res) => {console.log('login')}

}