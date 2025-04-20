import keychain404 from "../assets/404keychain.png"
import devvykeychain from "../assets/devvykeychain.png"
import cap from "../assets/debugcap.png"
import bottle from "../assets/bottle.png"
import totebag from "../assets/tootebag.png"
import hoodie from "../assets/hoodie.png"
import mug from "../assets/mug.png"
import tshirt from "../assets/tshirt.png"
import sticker from "../assets/devvysticker.png"
import backpack from "../assets/schoolbag.png"
import notebookpen from "../assets/notebookpen.png"
import Wristband from "../assets/handband.png"


interface productdatatype{
  id: number;
  name: string;
  tagline: string;
  price: string;
  coins: string;
  img: string;
}


export const productdata:productdatatype[] =[
  {
    id: 1,
    name: "Devvy Wristband",
    tagline: "Code. Win. Repeat.",
    price: "₹89",
    coins: "90 pts",
    img: Wristband,
  },
  {
    id: 2,
    name: "404 Keychain",
    tagline: "Not found? At least you got style.",
    price: "₹79",
    coins: "80 pts",
    img: keychain404,
  },
  {
    id: 3,
    name: "Devvy Keychain",
    tagline: "Key to the Dev dimension.",
    price: "₹79",
    coins: "80 pts",
    img: devvykeychain,
  },
  {
    id: 4,
    name: "Devvy Sticker Pack",
    tagline: "Stick to the grind.",
    price: "₹99",
    coins: "100 pts",
    img: sticker,
  },
  {
    id: 5,
    name: "Devvy Mug",
    tagline: "Sip. Ship. Repeat.",
    price: "₹149",
    coins: "160 pts",
    img: mug,
  },
  {
    id: 6,
    name: "Notebook & Pen Combo",
    tagline: "Write bugs. Fix vibes.",
    price: "₹139",
    coins: "140 pts",
    img: notebookpen,
  },
  {
    id: 7,
    name: "Debug Mode Cap",
    tagline: "Fix bugs, look fresh.",
    price: "₹199",
    coins: "200 pts",
    img: cap,
  },
  {
    id: 8,
    name: "Devvy Tote Bag",
    tagline: "Carry code & chaos.",
    price: "₹229",
    coins: "230 pts",
    img: totebag,
  },
  {
    id: 9,
    name: "Devvy Water Bottle",
    tagline: "Hydrate or hide rate.",
    price: "₹249",
    coins: "260 pts",
    img: bottle,
  },
  {
    id: 10,
    name: "Minimal Dev Tee",
    tagline: "Syntax in style.",
    price: "₹349",
    coins: "370 pts",
    img: tshirt,
  },
  {
    id: 11,
    name: "Devvy Hoodie",
    tagline: "Hood up. Code mode on.",
    price: "₹649",
    coins: "700 pts",
    img: hoodie,
  },
  {
    id: 12,
    name: "Devvy Backpack",
    tagline: "Carry your code in style.",
    price: "₹699",
    coins: "750 pts",
    img: backpack,
  },
]
