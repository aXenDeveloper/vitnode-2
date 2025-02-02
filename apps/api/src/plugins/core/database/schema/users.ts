import { index, pgTable } from 'drizzle-orm/pg-core';

import { core_groups } from './groups';
import { core_languages } from './languages';

export const core_users = pgTable(
  'core_users',
  (t) => ({
    id: t.serial().primaryKey(),
    name_seo: t.varchar({ length: 255 }).notNull().unique(),
    name: t.varchar({ length: 255 }).notNull().unique(),
    email: t.varchar({ length: 255 }).notNull().unique(),
    password: t.varchar(),
    joined_at: t.timestamp().notNull().defaultNow(),
    newsletter: t.boolean().notNull().default(false),
    avatar_color: t.varchar({ length: 6 }).notNull(),
    email_verified: t.boolean().notNull().default(false),
    group_id: t
      .integer()
      .references(() => core_groups.id)
      .notNull(),
    birthday: t.timestamp(),
    ip_address: t.varchar({ length: 40 }).notNull(),
    language: t
      .varchar({ length: 5 })
      .notNull()
      .default('en')
      .references(() => core_languages.code, {
        onDelete: 'set default',
      }),
  }),
  (t) => [
    index('core_users_name_seo_idx').on(t.name_seo),
    index('core_users_name_idx').on(t.name),
    index('core_users_email_idx').on(t.email),
  ],
);
