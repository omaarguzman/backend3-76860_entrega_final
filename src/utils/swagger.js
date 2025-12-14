import swaggerJSDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de API de adopciones",
            description: "API para gestionar usuarios, mascotas y adopciones en una plataforma de adopción de mascotas.",
            version: "1.0.0"
        }
    },
    apis: [join(__dirname, "../routes/*.js")]
};

export const specs = swaggerJSDoc(swaggerOptions);