exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          id
          slug
        }
      }
    }
  `)
  result.data.allContentfulBlogPost.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve(`./src/components/Post.tsx`),
      context: { postId: node.id },
    })
  })
}
