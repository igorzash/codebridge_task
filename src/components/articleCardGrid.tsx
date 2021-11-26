import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Article from '../models/articleModel';
import ArticleCard from './articleCard';



interface ArticleCardGridProps {
    fetchArticles: () => Promise<Article[]>;
}


const ArticleCardGrid: React.FunctionComponent<ArticleCardGridProps> = ({ fetchArticles }) => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        fetchArticles().then(value => {
            setArticles(value);
        });
    }, [fetchArticles]);

    return (
        <Grid container spacing={5}>
            {articles.map((article) => (
                <Grid item xs={4} key={`${article.title}${article.imageUrl}`}>
                    <ArticleCard article={article} />
                </Grid>
            ))}
        </Grid>
    );
}


export default ArticleCardGrid;