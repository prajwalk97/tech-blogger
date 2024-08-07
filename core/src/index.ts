import zod from "zod";

export const signUpInput = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
  name: zod.string(),
});

export const signInInput = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

export const createBlogInput = zod.object({
  title: zod.string(),
  content: zod.string().min(6),
});

export const updateBlogInput = zod.object({
  title: zod.string(),
  content: zod.string().min(6),
  id: zod.string(),
});
export type SignInInput = zod.infer<typeof signInInput>;
export type SignUpInput = zod.infer<typeof signUpInput>;
export type CreateBlogInput = zod.infer<typeof createBlogInput>;
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>;
