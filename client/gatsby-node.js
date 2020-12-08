
exports.createPages = ({ actions: { createPage } }) => {
  createPage({
      path: "/sample/",
      component: require.resolve("./src/templates/sample.js"),
      context: {
        name: "Ботинки",
        price: "25.8",
        content: "<h1>Ботинки</h1>",
      }
  })
}

