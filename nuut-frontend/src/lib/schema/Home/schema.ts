import { z } from "zod";

export const InputSchema = z.object({
  example: z
    .string()
    .min(1, "この項目は必須です")
    .max(20, "20文字以下で入力してください"),
});

// export type InputType = z.infer<typeof InputSchema>;
