import { z } from "zod";

export const productSchema = z.object({
    name : z
            .string()
            .min(1,{message : "required"}),
    price : z
            .number()
            .min(1, { message: "Price must be at least 1" }),
    description : z
            .string()
            .min(1,{message : "required"}),
})

export type productSchemaTypes = z.infer<typeof productSchema>