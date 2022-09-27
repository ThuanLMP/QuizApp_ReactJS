import { Button, Card, CardActions, CardContent, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";




export default function CardQuestion() {
    return (
        <Card sx={{ width: '100%', height: '70vh', textAlign: "center", marginTop: 5, }}>
            <CardContent>
                <Typography component="h1" variant="h5">
                    15/20
                </Typography>

                <Typography sx={{ fontSize: 20, marginTop: 9 }} color="black" gutterBottom>
                    Well meaning and kindly ?
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 8 }}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{width: '100%'}}
                    >
                        
                        <Grid item xs={6}>
                            <FormControlLabel value="ans1" control={<Radio />} label="Answer 1" />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel value="ans2" control={<Radio />} label="Answer 2" />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel value="ans3" control={<Radio />} label="Answer 3" />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel value="ans4" control={<Radio />} label="Answer 4" />
                        </Grid>

                    </RadioGroup>

                </Grid>
            </CardContent>

            <CardActions>
                <Grid container spacing={2} sx={{ marginTop: 0 }}>
                    <Grid item xs={6} sx={{ marginBottom: 5 }}>
                        <Button size="large" variant="contained">Back</Button>
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: 5 }}>
                        <Button size="large" variant="contained">Next</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}