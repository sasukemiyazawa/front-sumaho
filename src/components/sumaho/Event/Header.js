import { Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"

const Header = () => {

  return (
    <Container>
      <Head>
        <Button variant="contained" sx={{ flex: 1 }} component={Link} to="/sumaho/event" >開催中</Button>
        <Button variant="contained" sx={{ flex: 1 }} component={Link} to="/sumaho/event/list" >一覧</Button>
      </Head>
      <Outlet />
    </Container>

  )
}
export default Header

const Head = styled.div`
  display: flex;
`
const Container = styled.div`
  width: 100%;
  height: calc(100%-5rem)
`