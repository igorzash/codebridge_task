const ARTICLES_BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

// External Article Model (used by api)
interface ApiArticleModel {
    id: number;
    title: string;
    summary: string;
    publishedAt: string;
    imageUrl: string;
}


// Internal Article Model
interface Article {
    id: number;
    title: string;
    summary: string;
    publishedAt: Date;
    imageUrl: string;
}


// Maps external model to internal
function modelMapper({ id, title, summary, publishedAt, imageUrl }: ApiArticleModel): Article {
    return {
        id, title, summary, publishedAt: new Date(publishedAt), imageUrl
    }
}



export async function fetchArticles(): Promise<Article[]> {
    const result = await fetch(`${ARTICLES_BASE_URL}/articles`);

    const articles = (await result.json() as ApiArticleModel[]).map(modelMapper);

    return articles;
}


export default Article;
