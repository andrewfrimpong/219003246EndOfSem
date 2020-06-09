const express = require("express");
const router = express.Router();
const Material = require("../models/subscriber");

// Getting all
router.get("/", async (req, res) => {
  try {
    const material = await Material.find();
    res.json(material);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getMaterial, (req, res) => {
  res.json(res.material);
});

// Creating one
router.post("/", async (req, res) => {
  const material = new Material({
    name: req.body.name,
    Material: req.body.Material,
  });
  try {
    const newMaterial = await material.save();
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", getMaterial, async (req, res) => {
  if (req.body.name != null) {
    res.material.name = req.body.name;
  }
  if (req.body.Material != null) {
    res.material.Material = req.body.Material;
  }
  try {
    const updatedMaterial = await res.subscriber.save();
    res.json(updatedMaterial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getMaterial, async (req, res) => {
  try {
    await res.material.remove();
    res.json({ message: "Deleted Material" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getMaterial(req, res, next) {
  let subscriber;
  try {
    material = await Material.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find Material" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.material = material;
  next();
}
