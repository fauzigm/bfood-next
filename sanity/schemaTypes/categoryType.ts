import { productType } from "@/constants";
import { TagIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Category",
      type: "string",
      options: {
        list: productType,
      }
    }),
    defineField({
      name: "slug",
      title: "Category Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "name",
      slug: "slug",
    },
    prepare({ name, slug }) {
      // Dynamically map the name value to its title using the productType list
      const categoryTitle = name
        ? productType.find((option) => option.value === name)?.title || name
        : "No Category";

      return {
        title: categoryTitle,
        subtitle: slug?.current || "No Slug",
      };
    },
  },
});