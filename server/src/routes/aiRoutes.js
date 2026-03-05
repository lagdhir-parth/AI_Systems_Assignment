import { Router } from "express";
import { categoryController } from "../controllers/categoryController.js";
import { proposalController } from "../controllers/proposalController.js";
import {
  validateCategoryRequest,
  validateProposalRequest,
} from "../middlewares/validateRequest.js";

const router = Router();

router.post("/category", validateCategoryRequest, categoryController);
router.post("/proposal", validateProposalRequest, proposalController);

export default router;
