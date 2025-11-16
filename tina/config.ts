import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "tina",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Gallery",
                label: "Gallery",
                fields: [
                  {
                    name: "images",
                    label: "Images",
                    type: "string",
                    list: true,
                  },
                ],
              },
              {
                name: "IconPrayer",
                label: "Prayer Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconHome",
                label: "Home Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconBible",
                label: "Bible Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconGlobe",
                label: "Globe Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconStar",
                label: "Star Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconGift",
                label: "Gift Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconHelping",
                label: "Helping Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconLight",
                label: "Light Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconTree",
                label: "Tree Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconSun",
                label: "Sun Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconEducation",
                label: "Education Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconHeart",
                label: "Heart Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
              {
                name: "IconCommunity",
                label: "Community Icon",
                fields: [
                  {
                    name: "position",
                    label: "Position",
                    type: "string",
                    options: ["left", "right", "center"],
                  },
                  {
                    name: "size",
                    label: "Size",
                    type: "string",
                    options: ["sm", "md", "lg"],
                  },
                  {
                    name: "color",
                    label: "Color",
                    type: "string",
                    options: ["primary", "secondary", "accent"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
