import { z } from "zod";

export const InputSchema = z.object({
  foodName: z
    .string()
    .min(1, "食品名が入力されていません")
    .max(10, "10文字以下で入力してください")
    .regex(
      /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u3005-\u3007]+$/u,
      "全角のひらがな、漢字、またはカタカナで入力してください"
    ),
});

export type InputType = z.infer<typeof InputSchema>;
