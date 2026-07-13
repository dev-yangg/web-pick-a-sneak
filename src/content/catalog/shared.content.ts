const commonFilters = [
  {
    label: "Category",
    options: ["Sneaker", "Slip-ons", "Sports", "Lifestyle"],
  },
  {
    label: "Brand",
    options: [
      "Nike",
      "Adidas",
      "Puma",
      "Asics",
      "Onitsuka",
      "Converse",
      "Vans",
    ],
  },
  {
    label: "Gender",
    options: ["Men", "Women", "Unisex"],
  },
  {
    label: "Size",
    options: [
      6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5,
      14, 15, 16, 17, 18,
    ],
  },
  {
    label: "Color",
    options: [],
  },
];

const priceFilter = {
  label: "Price",
  min: 0,
  max: 20000,
};
export { commonFilters, priceFilter };
