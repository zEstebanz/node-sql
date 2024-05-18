import { Router } from "express";
import { getEmployees, postEmployees, updateEmployees, deleteEmployees, getEmployeeById } from "../controllers/employees.controller.js";

const router = Router()

router.get('/getEmpleado', getEmployees)
router.get('/idEmpleado/:id', getEmployeeById)
router.post('/postEmpleado', postEmployees)
router.patch('/updateEmpleado/:id', updateEmployees)
router.delete('/deleteEmpleado/:id', deleteEmployees)

export default router