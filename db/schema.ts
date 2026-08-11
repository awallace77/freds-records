import {
  pgTable,
  text,
  integer,
  numeric,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  artist: text("artist").notNull(),
  genre: text("genre"),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  inventory: integer("inventory").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const orders = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull(),
  status: text("status").notNull().default("pending"),
  total: numeric("total", { precision: 10, scale: 2 }).notNull(),
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});