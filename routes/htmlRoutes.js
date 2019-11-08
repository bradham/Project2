var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load testimonials page
  app.get("/testimonial", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("testimonial", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load resources page
  app.get("/resources", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("resources", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
