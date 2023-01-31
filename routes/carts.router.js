import { Router } from "express";
const router = Router();

import { CartManager } from "../src/CartManager.js";
const cartMan = new CartManager();

router.get("/", (req, res) => {
  let cart = cartMan.getPurchases();
  res.json(cart);
});

router.post("/:cid", (req, res) => {
  let { cid } = req.params;
  let cart = cartMan.addToCart(parseInt(cid));
  res.json(cart);
});

router.get("/:cid", (req, res) => {
  let { cid } = req.params;
  let purch = cartMan.getPurchaseById(parseInt(cid));
  res.json(purch);
});

router.delete("/:cid", (req, res) => {
  let { cid } = req.params;
  let del = cartMan.deletePurchase(parseInt(cid));
  res.json(del);
});

export default router;
