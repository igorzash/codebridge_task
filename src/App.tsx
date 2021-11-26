import React from 'react';
import './App.scss';
import { AppBar, Button, Container, Divider, Grid, Pagination, Typography } from '@mui/material';
import SearchBar from './components/searchBar';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import PublicationCardGrid from './components/publicationCardGrid';
import { fetchPublications } from './models/publicationModel';


function App() {
  return (
    <>
      <AppBar position="fixed" color="transparent" sx={{ background: 'white' }}>
        <Container>
          <Grid container justifyContent="center" alignItems="center" sx={{ py: 3 }}>
            <Grid item container xs>
              <RocketLaunchRoundedIcon sx={{ fontSize: 56 }} />
              <Grid item container direction="column" sx={{ pl: 1 }} xs>
                <Typography sx={{ fontSize: 28, fontWeight: 'bold', lineHeight: 1 }} className="noselect">
                  Spaceflight
                </Typography>
                <Typography sx={{ fontSize: 28, fontWeight: 'bold', lineHeight: 1 }} className="noselect">
                  News
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs />
            <Grid item xs={3} >
              <SearchBar />
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Container sx={{ pt: 20 }}>
        <PublicationCardGrid fetchPublications={fetchPublications} />
      </Container>
    </>
  );
}

export default App;
