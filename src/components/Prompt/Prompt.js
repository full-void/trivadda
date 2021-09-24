import { useEffect, useState } from "react";
import { Paper, Typography, Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router";
import { decode as htmlUnescape } from "he";

export default function Prompt(props) {
    const [question, setQuestion] = useState("We're Loading. Till then, what's the first number?")
    const [choices, setChoices] = useState([{
        value: '1',
        correct: true,
        idx: 1
    }, {
        value: '2',
        correct: false,
        idx: 2
    }, {
        value: '3',
        correct: false,
        idx: 3
    }, {
        value: '4',
        correct: false,
        idx: 4,
    }
    ])
    const [correct, setCorrect] = useState(0)
    const [selected, setSelected] = useState(-1)
    const [showAnswer, setShowAnswer] = useState(false)
    const [number, setNumber] = useState(0)

    const formatString = (string) => {
        return htmlUnescape(string)
    }

    const { value } = useParams()

    useEffect(async () => {
        const res = await fetch(`https://opentdb.com/api.php?amount=1&category=${value}&type=multiple`);
        const jsonres = await res.json()

        const trivia = jsonres.results[0]

        const rightIdx = Math.floor(Math.random() * 4)

        let newChoices = trivia.incorrect_answers
        newChoices.splice(rightIdx, 0, trivia.correct_answer)

        let formattedChoices = []

        for (const idx of newChoices.keys()) {
            formattedChoices.push({
                value: formatString(newChoices[idx]),
                idx: idx,
            })
        }

        setQuestion(formatString(trivia.question))
        setChoices(formattedChoices)
        setCorrect(rightIdx)
    }, [number])

    return (
        <Box>
            <Container>
                <Paper sx={{ padding: '2em', textAlign: 'center' }}>
                    <Typography variant='h4' component='p'>
                        {question}
                    </Typography>
                    <Box sx={{ marginTop: '2em' }}>
                        {choices.map((choice) => {
                            let color = 'primary'
                            let variant = 'outlined'

                            // We have to show selected if this is selected or (show answer and this is right)
                            if (selected === choice.idx || (showAnswer && correct === choice.idx)) variant = 'contained'

                            // We have to show answer and this choice is right (regardless of selected or not), we have to show the right answer
                            if (showAnswer && correct === choice.idx) color = 'success'

                            // We have to show answer, this is selected, and is wrong, we show it wrong
                            if (showAnswer && selected === choice.idx && correct !== choice.idx) color = 'error'

                            return (
                                <Button
                                    variant={variant}
                                    color={color}
                                    onClick={() => {
                                        setSelected(choice.idx)
                                        setShowAnswer(false) // The person changed their choice
                                    }}
                                    sx={{ textTransform: 'none', width: '100%', textAlign: 'center', padding: '1.5em', marginTop: '0.5em' }}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                        {choice.value}
                                    </Typography>
                                </Button>
                            )
                        })}
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => setShowAnswer(true)}
                            sx={{ textTransform: 'none', width: '100%', textAlign: 'center', padding: '1.5em', marginTop: '2.5em' }}>
                            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                SUBMIT
                            </Typography>
                        </Button>

                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => {
                                setShowAnswer(false)
                                setSelected(-1)
                                setNumber(number + 1)
                            }}
                            sx={{ textTransform: 'none', width: '100%', textAlign: 'center', padding: '1.5em', marginTop: '1em' }}>
                            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                NEXT
                            </Typography>
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box >
    )
}