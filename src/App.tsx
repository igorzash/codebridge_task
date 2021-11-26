import React from 'react';
import './App.scss';
import { Container } from '@mui/material';
import { fetchArticles } from './models/articleModel';
import ArticleCardGrid from './components/articleCardGrid';


function App() {
  return (
    <Container>
      <ArticleCardGrid fetchArticles={fetchArticles} />
    </Container>
  );
}

export default App;
