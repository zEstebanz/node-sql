import express from 'express'
import employeesRoutes from './routes/employees.route.js'
import indexRoutes from './routes/index.route.js';

const app = express()

// Parte crucial del middleware que se encarga de analizar las solicitudes entrantes con cuerpos JSON.

// Middleware, también conocido como lógica de intercambio de información entre aplicaciones (interlogical) o agente intermedio

app.use(express.json())

app.use(indexRoutes)
app.use(employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no Encontrado'
    })
});

export default app