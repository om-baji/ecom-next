import { z } from "zod";

export const loginSchema = z.object({
    username : z
            .string()
            .regex(/^[a-zA-Z0-9_-]{3,16}$/)
            .optional(),
    email : z
            .string()
            .email()
            .optional(),
    password : z
            .string()
            .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            .min(1, { message : "Required"}),
            
}).refine((data) => data.email || data.username, {
    message: "Either username or email is required.",
    path: ["username", "email"],
});            

export type loginSchemaType = z.infer<typeof loginSchema>