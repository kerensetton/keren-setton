import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    // Vercel env vars — set TINA_CLIENT_ID and TINA_TOKEN in the Vercel dashboard under Settings → Environment Variables
  },

  media: {
    tina: {
      mediaRoot: "uploads/artist2",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ── Artist Settings (singleton) ────────────────────────────────────────
      {
        name: "artist2_settings",
        label: "Site Settings",
        path: "src/content/artist2-settings",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "artistName", label: "Artist Name" },
          { type: "string", name: "discipline", label: "Discipline" },
          { type: "string", name: "location", label: "Location" },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroCtaText", label: "Hero CTA Button Text" },
          { type: "string", name: "contactEmail", label: "Contact Email" },
          {
            type: "object",
            name: "socials",
            label: "Social Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Platform Label" },
              { type: "string", name: "href", label: "URL" },
            ],
          },
          { type: "image", name: "aboutPhoto", label: "About Page Photo" },
          {
            type: "string",
            name: "aboutPhotoCaption",
            label: "About Photo Caption",
          },
          {
            type: "string",
            name: "aboutLead",
            label: "About Lead Paragraph",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "aboutBody",
            label: "About Body Paragraphs",
            list: true,
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "exhibitions",
            label: "Selected Exhibitions",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Exhibition Title" },
              { type: "string", name: "venue", label: "Venue" },
              { type: "string", name: "location", label: "City / Country" },
              { type: "string", name: "year", label: "Year" },
            ],
          },
          {
            type: "object",
            name: "press",
            label: "Press & Reviews",
            list: true,
            fields: [
              {
                type: "string",
                name: "quote",
                label: "Quote",
                ui: { component: "textarea" },
              },
              { type: "string", name: "source", label: "Publication" },
              { type: "string", name: "author", label: "Author" },
            ],
          },
        ],
      },

      // ── Projects ───────────────────────────────────────────────────────────
      {
        name: "artist2_projects",
        label: "Projects",
        path: "src/content/artist2-projects",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Project Title" },
          { type: "string", name: "year", label: "Year" },
          { type: "string", name: "medium", label: "Medium" },
          {
            type: "string",
            name: "shortDesc",
            label: "Short Description",
            ui: { component: "textarea" },
          },
          { type: "image", name: "coverImage", label: "Cover Image" },
          {
            type: "object",
            name: "images",
            label: "Project Images",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Image" },
              { type: "string", name: "alt", label: "Alt Text" },
              { type: "string", name: "caption", label: "Caption" },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Project Description",
            isBody: true,
          },
        ],
      },
    ],
  },
});
