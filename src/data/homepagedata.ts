import bottle from "../assets/bottle.png";
import mug from "../assets/mug.png";
import tshirt from "../assets/tshirt.png";
import backpack from "../assets/schoolbag.png";
import hoodie from "../assets/hoodie.png";

interface productdatatype{
    id: number;
    name: string;
    tagline: string;
    price: string;
    coins: string;
    img: string;
  }

export const topProducts:productdatatype[] = [
  {
    id: 1,
    name: "Hydra Dev Bottle",
    tagline: "Hydrate, dominate, repeat.",
    price: "₹199",
    coins: "230 pts",
    img: bottle,
  },
  {
    id: 2,
    name: "Devvy Mug",
    tagline: "Fuel your code with coffee.",
    price: "₹199",
    coins: "230 pts",
    img: mug,
  },
  {
    id: 3,
    name: "Minimal Dev Tee",
    tagline: "Syntax in style. Black or white? You choose.",
    price: "₹299",
    coins: "350 pts",
    img: tshirt,
  },
  {
    id: 4,
    name: "Devvy Backpack",
    tagline: "Carry your code in style.",
    price: "₹299",
    coins: "350 pts",
    img: backpack,
  },
  {
    id: 5,
    name: "Devvy Hoodie",
    tagline: "Wrap your grind in warmth and style.",
    price: "₹499",
    coins: "550 pts",
    img: hoodie,
  },
];
