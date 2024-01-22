const jwt = require('jsonwebtoken')
const secretKey = 'dummy-secret key'
const expires = '1h'

const userList = [
    {id: 1, user: "admin1", password: "admin1", roles: ["admin"]},
    {id: 2, user: "client", password: "client", roles: ["user"]}
]

const encryptToken = (params) => {
    const tokenResult = jwt.sign(
        {id: params.id, user: params.user, roles: params.roles},
        secretKey,
        {expiresIn: expires}
    )
    return tokenResult
}

const authenticateToken = (req, res, next) => {
    
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      req.user = user;
      next();
    });
}

const authProcess = (req, res) => {
    const user = req.body.user
    const password = req.body.password
    const loginUser = userList.find(u => u.user === user && u.password === password)

    if(!loginUser){
        return res.status(401).json({message: "Invalid Credentials!"})
    }

    const tokenResult = encryptToken(
        {id: loginUser.id, user: loginUser.user, roles: loginUser.roles}
    )
    res.json({
        user: loginUser.user,
        token: tokenResult
    })
}

module.exports = { encryptToken, authenticateToken , authProcess};