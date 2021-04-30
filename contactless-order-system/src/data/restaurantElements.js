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

// Restaurant 2
import r2logo from "../images/Restaurant2/logo.png";
import r2item1 from "../images/Restaurant2/item1.webp";
import r2item2 from "../images/Restaurant2/item2.webp";
import r2item3 from "../images/Restaurant2/item3.webp";
import r2item4 from "../images/Restaurant2/item4.webp";
import r2item5 from "../images/Restaurant2/item5.webp";
import r2item6 from "../images/Restaurant2/item6.webp";

// Restaurant 3
import r3logo from "../images/Restaurant3/logo.png";
import r3item1 from "../images/Restaurant3/item1.jpg";
import r3item2 from "../images/Restaurant3/item2.jpg";
import r3item3 from "../images/Restaurant3/item3.jpg";
import r3item4 from "../images/Restaurant3/item4.jpg";
import r3item5 from "../images/Restaurant3/item5.jpg";
import r3item6 from "../images/Restaurant3/item6.jpg";

const restaurantElements = [
  {
    id: uuidv4(),
    active: true,
    name: "Chick-fil-A",
    location: "Orlando, FL",
    restImage: r1logo,
    menu: [
      {
        id: uuidv4(),
        item: "Chicken Sandwhich",
        ingred: ["White Bun, ", "Fried Chicken, ", "Pickles"],
        price: 5.99,
        itemImage: r1item1,
      },
      {
        id: uuidv4(),
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
        id: uuidv4(),
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
        id: uuidv4(),
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
        id: uuidv4(),
        item: "Nuggets",
        ingred: ["Boneless Chicken Breast"],
        price: 4.99,
        itemImage: r1item5,
      },
      {
        id: uuidv4(),
        item: "Waffle Potato Fries",
        ingred: ["Seas Salt, Cooked in Canola Oil"],
        price: 3.99,
        itemImage: r1item6,
      },
    ],
  },
  ///////////////////////////////////////////////////////////////////////
  {
    id: uuidv4(),
    active: true,
    name: "Olive Garden",
    location: "Waterford Lakes, FL",
    restImage: r2logo,
    menu: [
      {
        id: uuidv4(),
        item: "Chicken Alfredo",
        ingred: [
          "Alfedo Suace, ",
          "Parmesan Cheese, ",
          "Fettuccine Pasta, ",
          "Grilled Chiacken",
        ],
        price: 16.49,
        itemImage: r2item1,
      },
      {
        id: uuidv4(),
        item: "Chicken and Shrimp Carbonara",
        ingred: [
          "Sautéed Seasoned Chicken, ",
          "Shrimp, ",
          "Spaghetti, ",
          "Creamy Sauce, ",
          "Roasted Red Reppers, ",
          "Bacon",
        ],
        price: 17.99,
        itemImage: r2item2,
      },
      {
        id: uuidv4(),
        item: "Chicken Parmigiana",
        ingred: [
          "Fried Parmesan-Breaded Chicken Breasts, ",
          "Marinara Sauce, ",
          "Italian Cheeses, ",
          "Spaghetti",
        ],
        price: 16.99,
        itemImage: r2item3,
      },
      {
        id: uuidv4(),
        item: "Tour of Italy",
        ingred: [
          "Chicken Parmigiana, ",
          "Lasagna Classico, ",
          "Fettuccine Alfredo",
        ],
        price: 18.49,
        itemImage: r2item4,
      },
      {
        id: uuidv4(),
        item: "Shrimp Alfredo",
        ingred: ["Fettuccine Alfredo, ", "Sautéed Shrimp"],
        price: 17.99,
        itemImage: r2item5,
      },
      {
        id: uuidv4(),
        item: "Lasagna Classico",
        ingred: [
          "Layers of Pasta, ",
          "Parmesan, ",
          "Mozzarella, ",
          "Pecorino Romano, ",
          "Meat Sauce",
        ],
        price: 15.49,
        itemImage: r2item6,
      },
    ],
  },
  ///////////////////////////////////////////////////////////////////////
  {
    id: uuidv4(),
    active: true,
    name: "Bento Asian Kitchen",
    location: "Oviedo, FL",
    restImage: r3logo,
    menu: [
      {
        id: uuidv4(),
        item: "Mongolian Noodle Bowl",
        ingred: [
          "Red Bell Peppers, Onions, Scallions, Mushrooms, Sweet Hoisin Sauce",
        ],
        price: 12.49,
        itemImage: r3item1,
      },
      {
        id: uuidv4(),
        item: "Veggie Stir Fry Noodle Bowl",
        ingred: [
          "Broccoli, Carrots, String Beans, Red Bell Pepper, Mushroom, Zucchini, Soy Garlic Sauce",
        ],
        price: 12.99,
        itemImage: r3item2,
      },
      {
        id: uuidv4(),
        item: "Korean Noodle Bowl",
        ingred: [
          "Red Bell Peppers, Onions, Scallions, Mushrooms, Gochujang Sauce",
        ],
        price: 11.99,
        itemImage: r3item3,
      },
      {
        id: uuidv4(),
        item: "Garlic Broccoli Rice Bowl",
        ingred: ["Broccoli, Carrots, Soy Garlic sauce"],
        price: 10.99,
        itemImage: r3item4,
      },
      {
        id: uuidv4(),
        item: "Red Coconut Curry Rice Bowl",
        ingred: ["Red Bell Peppers, String Beans, Carrots, Zucchini"],
        price: 1,
        itemImage: r3item5,
      },
      {
        id: uuidv4(),
        item: "Korean Rice Bowl",
        ingred: [
          "Red Bell Peppers, Onions, Scallions, Mushrooms, Gochujang Sauce",
        ],
        price: 11.49,
        itemImage: r3item6,
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
