import { Request, Response, Router } from 'express';
import { getFruits } from '../service/api';
import { FruitSchema } from '../schemas/FruitSchema';

const route = Router();

route.get('/fruits/', async (req: Request, res: Response) => {
    const fruit = req.query.fruit as string;
    let data = await getFruits(fruit)

    const result = FruitSchema.safeParse(data);

    if (!result.success) {
        res.status(500).json({ error: "An internal error has occurred" });
        return;
    }

    res.json({
        "Finded fruits": result
    });
});

export default route;