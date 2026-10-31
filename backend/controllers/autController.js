export const login = (req,res) =>{

    const {usuario, password} = req.body;
    if(usuario === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD){
        res.status(200).json({
        mensaje: 'Bienvenido Eduardo!'
         })
    }
    else{
        res.status(401).json({
            mensaje:'No tienes permitido el ingreso'
        })
    }
    console.log(usuario,password);
}

