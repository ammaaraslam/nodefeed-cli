// This file includes all queries for different flags/commands

export const CommunityArticlesQuery = `
query CommunityArticlesQuery($page: Int!) {
        storiesFeed(type: COMMUNITY, page: $page){
          title
          brief
          slug
          author{
            name
            username
          }

        }
      
}
`;

export const LatestArticlesQuery = `
query LatestArticlesQuery($page: Int!) {
        storiesFeed(type: NEW, page: $page){
          title
          brief
          slug
          author{
            name
            username
          }

        }
      
}
`;

export const FeaturedArticlesQuery = `
query FeaturedArticlesQuery($page: Int!) {
        storiesFeed(type: FEATURED, page: $page){
          title
          brief
          slug
          author{
            name
            username
          }

        }
      
}
`;
export const TrendingArticlesQuery = `
query TrendingArticlesQuery($page: Int!) {
        storiesFeed(type: BEST, page: $page){
          title
          brief
          slug
          author{
            name
            username
          }

        }
      
}
`;

export const ArticlesByUserQuery = `
query ArticlesByUserQuery($page: Int!, $username: String!) {
    user(username: $username){
      publication{
        posts(page: $page){
            title
            brief
            slug
        }
      }
  }
}
`;
