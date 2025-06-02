import { join } from 'path';
import { Router } from 'express';

const pageRouter = Router();

pageRouter.get('/canvas', function(req, res,next)
{
    res.sendFile(join(__dirname, '../Pages/CanvasPage/html/index.html'));
});

export default pageRouter;