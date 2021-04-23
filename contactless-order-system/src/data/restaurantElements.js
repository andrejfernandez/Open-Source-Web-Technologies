import { v4 as uuidv4 } from "uuid";
import temp from "../images/temp.jpg";

// Restaurant 1
import r1logo from "../images/Restaurant1/logo.jpg";
import r1item1 from "../images/Restaurant1/item1.png";
import r1item2 from "../images/Restaurant1/item2.png";
import r1item3 from "../images/Restaurant1/item3.png";
import r1item4 from "../images/Restaurant1/item4.png";
import r1item5 from "../images/Restaurant1/item5.png";
import r1item6 from "../images/Restaurant1/item6.png";

const restaurantElements = [
  {
    id: uuidv4(),
    active: true,
    name: "Chick-fil-A",
    location: "Orlando, FL",
    restImage: r1logo,
    menu: [
      {
        item: "Chicken Sandwhich",
        ingred: ["White Bun, ", "Fried Chicken, ", "Pickles"],
        price: 5.99,
        itemImage: r1item1,
      },
      {
        item: "Deluxe Chicken Sandwhich",
        ingred: [
          "White Bun, ",
          "Fried Chicken, ",
          "Pickles, ",
          "Tomato, ",
          "Lettuce ",
        ],
        price: 6.99,
        itemImage: r1item2,
      },
      {
        item: "Grilled Chicken Sandwhich",
        ingred: [
          "Brioche Bun, ",
          "Grilled Chicken, ",
          "Pickles, ",
          "Tomato, ",
          "Lettuce",
        ],
        price: 7.49,
        itemImage: r1item3,
      },
      {
        item: "Deluxe Grilled Chicken Sandwhich",
        ingred: [
          "Brioche Bun, ",
          "Grilled Chicken, ",
          "Bacon, ",
          "Colby Jack Cheese, ",
          "Pickles, ",
          "Tomato, ",
          "Lettuce",
        ],
        price: 7.99,
        itemImage: r1item4,
      },
      {
        item: "Nuggets",
        ingred: ["Boneless Chicken Breast"],
        price: 4.99,
        itemImage: r1item5,
      },
      {
        item: "Waffle Potato Fries",
        ingred: ["Seas Salt, Cooked in Canola Oil"],
        price: 3.99,
        itemImage: r1item6,
      },
    ],
  },

  // {
  //   id: uuidv4(),
  //   active: false,
  //   name: "Restaurant 2",
  //   location: "Winter Park, FL",
  //   restImage: temp,
  //   // menu: [
  //   //   {
  //   //     item: "",
  //   //     desc: "",
  //   //     ingred: ["", ""],
  //   //     price: "",
  //   //     itemImage: "",
  //   //   },
  //   // ],
  // },
];

export default restaurantElements;
