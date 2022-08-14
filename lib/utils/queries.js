export const CommunityArticlesQuery = `
query CommunityArticlesQuery($page: Int!) {
        storiesFeed(type: COMMUNITY, page: $page){
          title
          brief
          slug
        }
      
}
`;
