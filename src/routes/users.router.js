import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

/**
 @swagger
 components:
   schemas:
     User:
       type: object
       properties:
         _id:
           type: string
           description: ID autogenerado por MongoDB
         first_name:
           type: string
           description: Nombre del usuario
         last_name:
           type: string
           description: Apellido del usuario
         email:
           type: string
           description: Correo electrónico único
         role:
           type: string
           description: Rol del usuario (user/admin)
         pets:
           type: array
           items:
             type: object
           description: Array de mascotas adoptadas
 */

/**
 @swagger
 /api/users:
   get:
     summary: Obtiene todos los usuarios
     tags: [Users]
     responses:
       200:
         description: Lista de usuarios obtenida exitosamente
         content:
           application/json:
             schema:
               type: array
               items:
                 $ref: '#/components/schemas/User'
       500:
         description: Error interno del servidor
 */
router.get('/', usersController.getAllUsers);

/**
 @swagger
 /api/users/{uid}:
   get:
     summary: Obtiene un usuario por su ID
     tags: [Users]
     parameters:
       - in: path
         name: uid
         schema:
           type: string
         required: true
         description: ID del usuario
     responses:
       200:
         description: Usuario encontrado
         content:
           application/json:
             schema:
               $ref: '#/components/schemas/User'
       404:
         description: Usuario no encontrado
 */
router.get('/:uid', usersController.getUser);

/**
 @swagger
 /api/users/{uid}:
   put:
     summary: Actualiza un usuario existente
     tags: [Users]
     parameters:
       - in: path
         name: uid
         required: true
         description: ID del usuario
     requestBody:
       required: true
       content:
         application/json:
           schema:
             $ref: '#/components/schemas/User'
     responses:
       200:
         description: Usuario actualizado correctamente
       404:
         description: Usuario no encontrado
 */
router.put('/:uid', usersController.updateUser);

/**
 @swagger
 /api/users/{uid}:
   delete:
     summary: Elimina un usuario
     tags: [Users]
     parameters:
       - in: path
         name: uid
         required: true
         description: ID del usuario a eliminar
     responses:
       200:
         description: Usuario eliminado correctamente
       404:
         description: Usuario no encontrado
 */
router.delete('/:uid', usersController.deleteUser);

export default router;