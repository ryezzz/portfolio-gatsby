const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }


  // res.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
  //   createPage({
  //     path: node.frontmatter.path,
  //     component: postTemplate,
  //   })
  // })

  result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        next,
        previous,
      },
    });
  });
};
