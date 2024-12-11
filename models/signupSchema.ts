import { z } from "zod";

export const signupSchema = z.object({
    username : z
            .string()
            .regex(/^[a-zA-Z0-9_-]{3,16}$/)
            .min(1, { message : "Required"}),
    email : z
            .string()
            .email()
            .min(1, { message : "Required"}),
    password : z
            .string()
            .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            .min(1, { message : "Required"}),
})              

export type signupSchemaType = z.infer<typeof signupSchema>