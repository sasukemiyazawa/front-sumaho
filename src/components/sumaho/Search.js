import axios from "axios"
import { useEffect, useState } from "react"
import { IconButton, InputBase, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import styled from "styled-components"
import Font from "@fontsource/noto-sans-jp"
import Tag from "./Tag"
import { Grid } from "@mui/material"
const Search = ({ baseURL }) => {

    const [image, setImgae] = useState({})
    const [tagDatas, setTagDatas] = useState([])
    const url = baseURL + 'posts'
    const url2 = baseURL + 'tags'

    const getImage = () => {
        axios.get(url)
            .then(res => {
                console.log(res)
                setImgae(res.data.data[1].images_url)
            })
            .catch(err => console.log(err))
    }
    const getTagDatas = () => {
        axios.get(url2)
            .then(res => {
                console.log(res)
                setTagDatas(res.data.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getImage()
        getTagDatas()
    }, [])
    return (
        <Container>
            <SearchField>
                <StyledInput placeholder="名前で検索" sx={{ flex: 1 }} />
                <IconButton type="button">
                    <SearchIcon />
                </IconButton>
            </SearchField>
            {image && <Img src={image} />}
            <TypoDiv>
                <Typography sx={{ fontFamily: Font }}>タグで検索</Typography>
            </TypoDiv>
            {/* {tagDatas[0] && <p>{tagDatas[3].tagname}</p>} */}
            <Grid container>
                {Object.keys(tagDatas).map(key => <Tag key={key} data={tagDatas[key]} />)}
            </Grid>
        </Container>
    )
}
export default Search
const Container = styled.div`
    height: 100%;
    width: 100%;
`
const SearchField = styled.div`
    display: flex;
    height: 1.5rem;
    margin: 1.5rem;
    background-color: #E4E4E4;
`
const Img = styled.img`
    height: 30vh;
    width: 100%;
    position: relative;
    object-fit: cover;
`
const StyledInput = styled(InputBase)`

        ::placeholder {
            text-align: center;
        }
    
`
const TypoDiv = styled.div`
    border-bottom: solid  grey 1px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`