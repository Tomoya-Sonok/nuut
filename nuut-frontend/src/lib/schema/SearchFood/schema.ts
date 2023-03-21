import { z } from "zod";

export const InputSchema = z.object({
  foodName: z
    .string()
    .min(1, "食品名が入力されていません")
    .max(10, "10文字以下で入力してください"),
});

export type InputType = z.infer<typeof InputSchema>;
