import { procedure, router } from "./trpc";

export const appRouter = router({
  greeting: procedure.query(() => "hello tRPC"),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
