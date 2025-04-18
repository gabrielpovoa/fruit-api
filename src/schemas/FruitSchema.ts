import z from 'zod';

export const FruitSchema = z.object({
    name: z.string(),
    id:z.number().int(),
    family: z.string(),
    order: z.string(),
    genus: z.string(),
    nutritions: z.object({
        calories: z.number(),
        fat: z.number(),
        sugar: z.number(),
        carbohydrates: z.number(),
        protein: z.number()
    })
});
