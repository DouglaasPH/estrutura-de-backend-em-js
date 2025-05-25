import { Router } from "express";
import autores_controllers from "./app/controllers/autores_controllers.js";

const router = Router();

router.get("/getAutores", autores_controllers.getAutores);
router.post("/postAutores", autores_controllers.postAutores);
router.put("/putAutores", autores_controllers.putAutores);
router.delete("/deleteAutores", autores_controllers.deleteAutores);

export default router;
