import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";




export default function CardQuestion() {
    return (
        <Card sx={{ width: '100%', height: '70%', textAlign: "center", marginTop: 5, backgroundColor: '#e0e3e9' }}>
            <CardContent>
                <Typography component="h1" variant="h5">
                    15/20
                </Typography>

                <Typography sx={{ fontSize: 20, marginTop: 10 }} color="red" gutterBottom>
                    Well meaning and kindly. Well meaning and kindly. Well meaning and kindly. Well meaning and kindly ?
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 10 }}>
                    <Grid item xs={6}>
                        <Button variant="outlined" sx={{
                            width: '50%',
                        }}>Ahihi</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" sx={{ width: '50%' }}>Ahihi</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" sx={{ width: '50%' }}>Ahihi</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" sx={{ width: '50%' }}>Ahihi</Button>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions>
                <Grid container spacing={2} sx={{ marginTop: 6 }}>
                    <Grid item xs={6} sx={{ marginBottom: 5 }}>
                        <Button size="medium">Back</Button>
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: 5 }}>
                        <Button size="medium">Next</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}