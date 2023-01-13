import { type Card } from "@prisma/client";
import { z } from "zod";

//Card Mutation router
import { createTRPCRouter, publicProcedure } from "../trpc";
export const cardRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        desc: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.prisma.card.create({
        data: {
          userId: input.id,
          title: input.title,
          desc: input.desc,
        },
      });
      return res;
    }),
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const res: Card[] = await ctx.prisma.card.findMany({
        where: {
          userId: input.id,
        },
      });
      return res;
    }),
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.card.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
