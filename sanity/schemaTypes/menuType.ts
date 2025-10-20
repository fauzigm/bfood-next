import { productType } from "@/constants";
import { defineField, defineType } from "sanity";

export const menuType = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    }),
    defineField({
      name: "package",
      title: "Package",
      type: "string",
      options: {
        list: [
          { title: "Paket Ekonomis", value: "paket_ekonomis" },
          { title: "Paket Standar", value: "paket_standar" },
          { title: "Paket Keluarga", value: "paket_keluarga" },
          { title: "Paket Spesial", value: "paket_spesial" },
          { title: "Paket VIP", value: "paket_VIP" },
        ],
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "main",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      pkg: "package",
      category: "category.name", // References the name from the categories document
      price: "price",
    },
    prepare({ pkg, category, price }) {
      // Map package value to its title
      const packageOptions = [
        { title: "Paket Ekonomis", value: "paket_ekonomis" },
        { title: "Paket Standar", value: "paket_standar" },
        { title: "Paket Keluarga", value: "paket_keluarga" },
        { title: "Paket Spesial", value: "paket_spesial" },
        { title: "Paket VIP", value: "paket_VIP" },
      ];
      const packageTitle = pkg
        ? packageOptions.find((option) => option.value === pkg)?.title || pkg
        : "No Package";

      return {
        title: packageTitle,
        subtitle: `${category} • Rp ${price || "N/A"}`,
      };
    },
  },
});