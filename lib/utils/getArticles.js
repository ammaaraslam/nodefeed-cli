import fetch from 'node-fetch';

async function getArticles() {
	const query = `
    query GetUserArticles($page: Int!, $username: String!) {
        user(username: $username) {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;
	const variables = { page: 0, username: 'ammaaraslam' };

	const data = await fetch('https://api.hashnode.com/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables
		})
	});
	const result = await data.json();
	return result.data.user.publication.posts;
}
export default getArticles;
