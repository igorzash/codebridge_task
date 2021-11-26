const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

// External Model (used by api)
interface ApiPublicationModel {
    id: number;
    title: string;
    summary: string;
    publishedAt: string;
    imageUrl: string;
}


// Internal Model
interface Publication {
    id: number;
    title: string;
    summary: string;
    publishedAt: Date;
    imageUrl: string;
}


// Maps external model to internal
function modelMapper({ id, title, summary, publishedAt, imageUrl }: ApiPublicationModel): Publication {
    return {
        id, title, summary, publishedAt: new Date(publishedAt), imageUrl
    }
}



export async function fetchPublications(): Promise<Publication[]> {
    const results = await Promise.all([
        await fetch(`${BASE_URL}/articles?_limit=9`),
    ].map((result) => result.json()));

    console.log(results);
    
    return results.flatMap(
        (json) => (json as ApiPublicationModel[]).map(modelMapper)
    );
}


export default Publication;
