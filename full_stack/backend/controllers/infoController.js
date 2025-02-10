const getInfo = (req, res) => {
  res.json({
    message: "Hello, my name is Aniket",
    description: "This is your newly set up backend with Express",
    included: [
      "Express.js + Node.js",
      "MongoDB with Mongoose",
      "REST API structure", 
    ],
    links: {
      github: "https://github.com/Aniket-8719",
      linkedin: "https://www.linkedin.com/in/aniket-savita-bb295a230/",
    },
  });
};

module.exports = { getInfo };
