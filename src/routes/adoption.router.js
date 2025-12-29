import { Router} from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';

const router = Router();

/**
 * @swagger
 * /api/adoptions:
 * get:
 * summary: Obtiene todas las adopciones
 * tags: [Adoptions]
 * responses:
 * 200:
 * description: Lista de adopciones obtenida exitosamente
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Adoption'
 */
router.get('/',adoptionsController.getAllAdoptions);

/**
 * @swagger
 * /api/adoptions/{aid}:
 * get:
 * summary: Obtiene una adopción por su ID
 * tags: [Adoptions]
 * parameters:
 * - in: path
 * name: aid
 * schema:
 * type: string
 * required: true
 * description: ID de la adopción
 * responses:
 * 200:
 * description: Adopción encontrada
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Adoption'
 * 404:
 * description: Adopción no encontrada
 */
router.get('/:aid',adoptionsController.getAdoption);

/**
 * @swagger
 * /api/adoptions/{uid}/{pid}:
 * post:
 * summary: Crea una nueva adopción
 * tags: [Adoptions]
 * parameters:
 * - in: path
 * name: uid
 * schema:
 * type: string
 * required: true
 * description: ID del usuario
 * - in: path
 * name: ______________  <-- ¿Qué nombre va aquí?
 * schema:
 * type: string
 * required: true
 * description: ID de la mascota
 * responses:
 * 200:
 * description: Adopción creada exitosamente
 * 404:
 * description: Usuario o mascota no encontrados
 */
router.post('/:uid/:pid',adoptionsController.createAdoption);

export default router;