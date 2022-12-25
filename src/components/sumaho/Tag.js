import { Box } from "@mui/system"
import { useEffect } from "react"
import { Grid } from "@mui/material"
import styled from "styled-components"
const Tag = ({ data }) => {
    useEffect(() => {
        console.log(data)
    }, [])
    return (
        <Grid xs="auto" spacing={2}>
            <item>
                <StyledBox sx={{ border: 1, borderRadius: '1rem', borderColor: 'black' }}>
                    {data.tagname}
                </StyledBox>
            </item>
        </Grid>
    )
}
export default Tag

const StyledBox = styled(Box)`
    width: 4rem;
`