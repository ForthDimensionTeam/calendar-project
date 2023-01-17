// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  checkbox,
  integer,
} from "@keystone-6/core/fields";

// the document field is a more complicated field, so it has it's own package
import { document } from "@keystone-6/fields-document";
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from ".keystone/types";

export const lists: Lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      age: integer({ validation: { isRequired: false } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      isAdmin: checkbox({
        defaultValue: false,
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp(),
      updatedAt: timestamp(),
      userTasks: relationship({ ref: "UserTask.user", many: true }),
      teams: relationship({ ref: "UserTeam.user", many: true }),
    },
  }),
  Team: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: false } }),
      tasks: relationship({ ref: "TeamTask.team", many: true }),
      users: relationship({ ref: "UserTeam.team", many: true }),
      createdAt: timestamp(),
      updatedAt: timestamp(),
    },
  }),
  UserTeam: list({
    access: allowAll,
    fields: {
      team: relationship({ ref: "Team.users", many: false }),
      user: relationship({ ref: "User.teams", many: false }),
    },
  }),
  Task: list({
    access: allowAll,
    fields: {
      title: text({ validation: { isRequired: true } }),
      content: text({ validation: { isRequired: false } }),
      date: timestamp(),
      userTasks: relationship({ ref: "UserTask.task", many: true }),
      teamTasks: relationship({ ref: "TeamTask.task", many: true }),
      createdAt: timestamp(),
      updatedAt: timestamp(),
    },
  }),
  UserTask: list({
    access: allowAll,
    fields: {
      user: relationship({ ref: "User.userTasks", many: false }),
      task: relationship({ ref: "Task.userTasks", many: false }),
    },
  }),
  TeamTask: list({
    access: allowAll,
    fields: {
      team: relationship({ ref: "Team.tasks", many: false }),
      task: relationship({ ref: "Task.teamTasks", many: false }),
    },
  }),
};
