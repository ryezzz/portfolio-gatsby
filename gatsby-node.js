const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`);

  const resultPage = await graphql(`
    {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {path: {regex: "/pages/"}, title: {}}, children: {}}
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

  const resultPortfolio = await graphql(`
  {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {path: {regex: "/portfolio/"}, title: {}}, children: {}}
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

  if (resultPortfolio.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }


resultPortfolio.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        next,
        previous,
      },
    });
  });


resultPage.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
  createPage({
    path: node.frontmatter.path,
    component: pageTemplate,
    context: {
      next,
      previous,
    },
  });
});

};



