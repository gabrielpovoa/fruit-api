import z from 'zod';
import { FruitSchema } from '../schemas/FruitSchema';


export type Fruit = z.infer<typeof FruitSchema>
