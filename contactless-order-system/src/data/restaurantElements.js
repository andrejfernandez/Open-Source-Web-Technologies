import { v4 as uuidv4 } from "uuid";
import temp from "../images/temp.jpg";

// MenuImages
import chickensand from "../images/food/Fried-Chicken.jpg";

const restaurantElements = [
  {
    id: uuidv4(),
    active: true,
    name: "Restaurant 1",
    location: "Orlando, FL",
    restImage: temp,
    menu: [
      {
        item: "Chicken Sandwhich",
        ingred: ["Potato Bun, ", "Spicy Mayo, ", "Fried Chicken, ", "Pickles"],
        price: 13.99,
        itemImage: chickensand,
      },
      {
        item: "Chicken Sandwhich",
        ingred: ["Potato Bun, ", "Spicy Mayo, ", "Fried Chicken, ", "Pickles"],
        price: 13.99,
        itemImage: chickensand,
      },
      {
        item: "Chicken Sandwhich",
        ingred: ["Potato Bun, ", "Spicy Mayo, ", "Fried Chicken, ", "Pickles"],
        price: 13.99,
        itemImage: chickensand,
      },

      {
        item: "Chicken Sandwhich",
        ingred: ["Potato Bun, ", "Spicy Mayo, ", "Fried Chicken, ", "Pickles"],
        price: 13.99,
        itemImage: chickensand,
      },
    ],
  },
  {
    id: uuidv4(),
    active: false,
    name: "Restaurant 2",
    location: "Winter Park, FL",
    restImage: temp,
    // menu: [
    //   {
    //     item: "",
    //     desc: "",
    //     ingred: ["", ""],
    //     price: "",
    //     itemImage: "",
    //   },
    // ],
  },
  {
    id: uuidv4(),
    active: false,
    name: "Restaurant 3",
    location: "Winter Springs, FL",
    restImage: temp,
    // menu: [
    //   {
    //     item: "",
    //     desc: "",
    //     ingred: ["", ""],
    //     price: "",
    //     itemImage: "",
    //   },
    // ],
  },
];

export default restaurantElements;

// {
//   name: "",
//   location: "",
//   restImage: "",
//   menu: [
//     {
//       item: "",
//       desc: "",
//       ingred: ["", ""],
//       price: "",
//       itemImage: ""
//     },
//   ],
// },
