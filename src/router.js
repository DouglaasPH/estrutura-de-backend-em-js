import { Router } from "express";
import autores_controllers from "./app/controllers/autores_controllers.js";

const router = Router();

router.get("/getAutores", autores_controllers.getAutores);
router.post("/postAutores", autores_controllers.postAutores);

export default router;
