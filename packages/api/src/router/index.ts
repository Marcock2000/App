import { router } from "../trpc";
import { listingRouter, messageRouter } from "./post";
import { authRouter } from "./auth";

export const appRouter = router({
  listing: listingRouter,
  message: messageRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
