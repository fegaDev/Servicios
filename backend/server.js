import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import autRoutes from './routes/autRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(json()); // Para poder recibir JSON en las peticiones

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Backend del pago de condominio funcionando!');
});

// Ruta de pruebas 
app.use('/api/auth', autRoutes);




// Levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo con éxito en http://localhost:${PORT}`);
});