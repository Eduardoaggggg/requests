const express = require ('express')
const app = express()
app. use(express.json())
// http://localhost:3000/eduardo/123
app.get('/:user/:password', (req, res) =>{ //Endponit
    const {user, password} = req.params
    if (user == 'eduardo' && password == '123'){
        res.json({msg:'inicio sesion exitoso'})
        return
    }
    res. json({msg:'fallo contraseña invalida'})
})
//http://localhost:3000/login?user=eduardo%password=123
app.get('/login', (req,res) => {
    const {user, password} = req.query
    if (!user || !password) {
        res.status(400).json({msg:'you need to provide <user> and <password> params'})
    }
    
    if (user === 'eduardo' && password === '123'){
        res.json(404).json({msg:'wrong user or password'})
    
}})

app.post('/login' , (req,res) => {
    const  {user, password}= req.body
    if (user == 'eduardo' && password == '123'){
        res.json({msg:'inicio sesion exitoso'})
        return
    }
    res. json({msg:'fallo contraseña invalida'})
    
})

app.put('/', (request, response) =>{
    response.json({msg:'Hola PUT'})
})
app.patch('/', (request, response) =>{
    response.json({msg:'Hola PATCH'})
})
app.delete('/', (request, response) =>{
    response.json({msg:'Hola DELETE'})
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})