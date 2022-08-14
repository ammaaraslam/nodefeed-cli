export const CommunityArticlesQuery = `
query CommunityArticlesQuery($page: Int!) {
        storiesFeed(type: COMMUNITY, page: $page){
          title
          brief
          slug
        }
      
}
`;

export const LatestArticlesQuery = `
query LatestArticlesQuery($page: Int!) {
        storiesFeed(type: NEW, page: $page){
          title
          brief
          slug
        }
      
}
`;

export const FeaturedArticlesQuery = `
query FeaturedArticlesQuery($page: Int!) {
        storiesFeed(type: FEATURED, page: $page){
          title
          brief
          slug
        }
      
}
`;
export const TrendingArticlesQuery = `
query TrendingArticlesQuery($page: Int!) {
        storiesFeed(type: BEST, page: $page){
          title
          brief
          slug
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
