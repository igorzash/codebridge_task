import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Publication from '../models/publicationModel';
import PublicationCard from './publicationCard';



interface PublicationCardGridProps {
    fetchPublications: () => Promise<Publication[]>;
}


const PublicationCardGrid: React.FunctionComponent<PublicationCardGridProps> = ({ fetchPublications }) => {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        fetchPublications().then(value => {
            setPublications(value);
        });
    }, [fetchPublications]);

    return (
        <Grid container spacing={5}>
            {publications.map((publication) => (
                <Grid item xs={4} key={`${publication.title}${publication.imageUrl}`}>
                    <PublicationCard publication={publication} />
                </Grid>
            ))}
        </Grid>
    );
}


export default PublicationCardGrid;