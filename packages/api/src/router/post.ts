import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const listingRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.listing.findMany({
      orderBy: {
        createdAt: "desc" // Order by createdAt field in descending order
      }
    });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.listing.findFirst({ where: { id: input } });
  }),
  create: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        imageUrl: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.listing.create({ data: input });
    }),
});

export const messageRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.message.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.message.findFirst({ where: { id: input } });
  }),
  create: protectedProcedure
    .input(
      z.object({
        fromUser: z.string(),
        fromUserName: z.string(),
        listingId: z.string(),
        message: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.message.create({ data: input });
    }),
});
