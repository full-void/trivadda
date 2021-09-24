import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Category from "./Category";

const categoryMap = [{
    name: 'Anime and Manga',
    value: 31
}, {
    name: 'General Knowledge',
    value: 9
}, {
    name: 'Books',
    value: 10
}, {
    name: 'Film',
    value: 11
}, {
    name: 'Music',
    value: 12
}, {
    name: 'Television',
    value: 14
}, {
    name: 'Video Games',
    value: 15
}, {
    name: 'Board Games',
    value: 16
}, {
    name: 'Science and Nature',
    value: 17
}, {
    name: 'Mythology',
    value: 20
}, {
    name: 'Sports',
    value: 21
}, {
    name: 'Art',
    value: 25
}, {
    name: 'Celebrities',
    value: 26
}, {
    name: 'Animals',
    value: 27
}]

export default function Welcome(props) {
    return (
        <Box sx={{
            textAlign: 'center', padding: 4
        }}>
            <Typography variant='h2'>Welcome!</Typography>
            <Typography variant='h4' sx={{ marginTop: '32px' }}>To Your Beautiful Trivia Hub</Typography>
            <Typography variant='h5' sx={{ marginTop: '32px' }}>Select a category below to start</Typography>
            <Container sx={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', alignItems: 'center' }}>
                {categoryMap.map(cat => {
                    return <Category name={cat.name} value={cat.value} />
                })}
            </Container>
        </Box>
    )
}