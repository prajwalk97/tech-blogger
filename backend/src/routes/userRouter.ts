import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signInInput, signUpInput } from "@prajwalk97/core";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const users = await prisma.user.findMany();
  return c.json({ users });
});
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    console.log("hii");
    const body = await c.req.json();
    console.log(body);
    const { success } = signUpInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({ message: "incorrect inputs" });
    }
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    console.log(user);
    const jwt = await sign({ id: user.id, name: user.name }, c.env.JWT_SECRET);
    console.log(jwt);
    return c.json({
      jwt,
    });
  } catch (e) {
    c.status(403);
    return c.json({ message: "invalid input" });
  }
});
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signInInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "incorrect inputs" });
  }
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      message: "no user found",
    });
  }
  const jwt = await sign({ id: user.id, name: user.name }, c.env.JWT_SECRET);
  console.log(jwt);
  return c.json({
    jwt,
  });
});