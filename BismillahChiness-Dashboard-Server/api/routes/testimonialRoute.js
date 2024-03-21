const express = require("express");
const Testimonial = require("../models/Testimonial");
const router = express.Router();

// get all testimonial data from database
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// POST a new testimonial to the database
router.post("/", async (req, res) => {
  try {
    // Assuming the request body contains data for the new testimonial
    const { name, designation, imageSrc, testimonialDescription, keyWord } =
      req.body;

    // Create a new Testimonial document
    const newTestimonial = new Testimonial({
      name,
      designation,
      imageSrc,
      testimonialDescription,
      keyWord,
    });

    // Save the new testimonial to the database
    await newTestimonial.save();

    res.status(201).json(newTestimonial); // Send the newly created testimonial in the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
