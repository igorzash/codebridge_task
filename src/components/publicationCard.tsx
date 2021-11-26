import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Publication from '../models/publicationModel';


const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];


function dateFormatter(date: Date): string {
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    const dayPostfix = (![1, 2, 3].includes(day)) ? 'th' : (
        day === 1 ? 'st' : (day === 2 ? 'nd' : (day === 3 ? 'rd' : '') )
    );

    return `${monthNames[month]} ${day}${dayPostfix}, ${year}`;
}



interface PublicationCardProps {
    publication: Publication
}



const PublicationCard: React.FunctionComponent<PublicationCardProps> = ({ publication }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={publication.imageUrl}
            />

            <Grid direction="column" container sx={{ height: 300, pb: 1 }} justifyContent="space-between">
                <CardContent sx={{ py: 0, px: 2.7 }}>
                    <Grid container direction="row" alignItems="center" sx={{ py: 2 }}>
                        <CalendarTodayOutlinedIcon sx={{ fontSize: 16, color: '#888' }} />

                        <Grid item sx={{ pl: 0.5 }}>
                            <Typography sx={{ fontSize: 16, color: '#888' }}>
                                {dateFormatter(publication.publishedAt)}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography gutterBottom variant="h5" sx={{ height: 100, m: 0, pb: 2 }}>
                        {publication.title}
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 2 }}>
                        {publication.summary.slice(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions sx={{ pt: 0, px: 2.7 }}>
                    <Link component="button" sx={{ fontWeight: 'bold' }} variant="body1" underline="none">
                        <Grid container direction="row" alignItems="center">
                            <Grid item sx={{ pr: 0.5 }}>Read more</Grid>
                            <ArrowForwardIcon sx={{ fontSize: 18 }} />
                        </Grid>
                    </Link>
                </CardActions>
            </Grid>
        </Card>
    );
}

export default PublicationCard;