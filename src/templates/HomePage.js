import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './HomePage.css'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, posts, postTechInfo }) => {

  let postArray = posts.edges.map((post, index) => {
       
    return (
      <li className="post-list-item" key={index}>
        <a target="_blank" rel="noopener noreferrer" href={post.node.frontmatter.featuredImage}><img className="post-list-img" src={post.node.frontmatter.featuredImage} />
        <div className="post-list-text">{post.node.frontmatter.title}</div>
        <div className="post-list-text font-kokoro">{post.node.frontmatter.title}</div>
        </a>
      </li>
    )
  })

  
  let postArrayGatsby = posts.edges.map((post, index) => {
    const wordsPerMinute = 500; // Average case.
    let minRead
    let textLength = post.node.internal.content.length
        minRead = Math.round(textLength / wordsPerMinute)
       
    if(post.node.frontmatter.categories){    
      if(post.node.frontmatter.categories[0].category == "Gatsbyチュートリアル"){
        return (
          <li className="post-list-item" key={index}>
            <a target="_blank" rel="noopener noreferrer" href={post.node.frontmatter.featuredImage}><img className="post-list-img" src={post.node.frontmatter.featuredImage} />
            <div className="post-list-text"><strong>{post.node.frontmatter.title}</strong></div>
            <div className="post-list-text font-kokoro">{post.node.frontmatter.categories[0].category}{' | '}{minRead}{' '}min{' '}read{' | '}{post.node.frontmatter.date}</div>
            <div className="post-list-desc">{post.node.excerpt}</div>
            </a>
          </li>
        )
      }
      
    }else{
      return ''
    }
    
  })

  let postArrayTechInfo = postTechInfo.edges.map((post, index) => {
    const wordsPerMinute = 500; // Average case.
    let minRead
    let textLength = post.node.internal.content.length
        minRead = Math.round(textLength / wordsPerMinute)
       
        return (
          <li className="post-list-item" key={index}>
            <a target="_blank" rel="noopener noreferrer" href={post.node.frontmatter.featuredImage}><img className="post-list-img" src={post.node.frontmatter.featuredImage} />
            <div className="post-list-text"><strong>{post.node.frontmatter.title}</strong></div>
            <div className="post-list-text font-kokoro">{post.node.frontmatter.categories[0].category}{' | '}{minRead}{' '}min{' '}read{' | '}{post.node.frontmatter.date}</div>
            <div className="post-list-desc">{post.node.excerpt}</div>
            </a>
          </li>
        )
    
  })

  return (
    <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
    <section className="section">
      <div className="container">New ブログ
      <ul className="post-list">{postArray}</ul>
      </div>
    </section>
    <section className="section">
      <div className="container">New Gatsby ブログ
      <ul className="post-list">{postArrayGatsby}</ul>
      </div>
    </section>
    <section className="section">
      <div className="container">New アメリカテクノロジーブログ
      <ul className="post-list">{postArrayTechInfo}</ul>
      </div>
    </section>
    
  </main>
  )

}

// Export Default HomePage for front-end
const HomePage = ({ data: { data, posts, postTechInfo } }) => {
  
  return (
    <Layout meta={data.frontmatter.meta || false}>
      
      <HomePageTemplate {...data} {...data.frontmatter} body={data.html} posts={posts} postTechInfo={postTechInfo} />
      
    </Layout>
  )

}

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    data: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            categories {
              category
            }
            featuredImage
          }
          internal{
            content
          }
        }
      }
    }
    postTechInfo: allMarkdownRemark(
      filter: {frontmatter: {categories: {elemMatch: {category: {eq: "Tech Info"}}}}, 
      fields: {contentType: {eq: "posts"}}}
      ) {
      edges {
        node {
          excerpt
          internal {
            content
          }
          frontmatter {
            categories {
              category
            }
            featuredImage
            date
            title
          }
        }
      }
    }
  }
`


