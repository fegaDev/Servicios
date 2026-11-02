export const login = (req,res) =>{

    const {usuario, password} = req.body;
    if(usuario === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD ){
        console.log('acaba de ingresar administrador');
        return res.status(200).json({
        mensaje: 'Bienvenido Eduardo!',
        autenticado: true
         })
    }
    else{
        console.log('Intento de ingreso fallido');
        return res.status(401).json({
            mensaje:'No tienes permitido el ingreso',
            autenticado: false
        })
    }
}

