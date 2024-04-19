import { protectedProcedure, publicProcedure, router } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.auth.userId;
  }),
  getSecretMessage: protectedProcedure.query(({ctx}) => {
    return ctx.auth.userId;
  }),
  
});
