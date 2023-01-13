import { createTRPCRouter } from "./trpc";
import { cardRouter } from "./routers/card";

export const appRouter = createTRPCRouter({
  card: cardRouter,
});

export type AppRouter = typeof appRouter;
