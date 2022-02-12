import { Router } from 'express';
import { uploadFiles, downloadFiles } from "./controllers";

const router = Router();

router.post('/upload', uploadFiles);
router.get('/download/:filename', downloadFiles);

export default router;
