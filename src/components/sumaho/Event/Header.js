import { Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"

/*
FIXME: スタイル変更
*/
const Header = () => {

  return (
    <Container>
      <Head>
        <Button variant="text" sx={{ flex: 1 }} component={Link} to="/sumaho/event" >開催中</Button>
        <Button variant="text" sx={{ flex: 1 }} component={Link} to="/sumaho/event/list" >一覧</Button>
      </Head>
      <Outlet />
    </Container>

  )
}
export default Header

const Head = styled.div`
  display: flex;
  height: 3rem;
`
const Container = styled.div`
  width: 100%;
  height: calc(100%-5rem);
`