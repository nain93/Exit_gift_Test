import beeple from "../../images/beeple.jpg";
import beeple2 from "../../images/beeple2.jpg";
import beeple3 from "../../images/beeple3.jpg";

export const homeObjOne = {
  id: "/",
  lightBg: false,
  lightText: true,
  ligthTextDesc: true,
  topLine: "",
  headline: " Beepel'S CROSSROAD #1/4",
  description: "Last Bid(24Bids) KRW 33,965,000,000",
  description2: "Hammer Price KRW",
  buttonLabel: "Sign in to bid",
  buttonLabel2: "Follow auction",
  imgStart: true,
  img: beeple,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "/mybid",
  lightBg: true,
  lightText: false,
  ligthTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you th send unlimited transactions without gettign charge any fees.",
  imgStart: true,
  img: beeple2,
  alt: "Beeple",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "/collection",
  lightBg: false,
  lightText: true,
  ligthTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description: "ddddddddddddddddddmyo.",
  imgStart: false,
  img: beeple3,
  alt: "Paper",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFour = {
  id: "/support",
  lightBg: true,
  lightText: false,
  ligthTextDesc: false,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description: "ddddddddddddddddddmyo.",
  imgStart: false,
  img: require("../../images/beeple.jpg"),
  alt: "Paper",
  dark: false,
  primary: false,
  darkText: true,
};
