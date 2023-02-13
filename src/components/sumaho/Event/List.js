import axios from "axios"
import { useEffect, useState } from "react"
import ListItem from "./ListItem"

const List = ({ baseURL }) => {
  const [events, setEvents] = useState({})
  const getEvents = () => {
    const url = `${baseURL}events`
    axios.get(url)
      .then(res => {
        console.log(res.data.data)
        setEvents(res.data.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {Object.keys(events).map(key => <ListItem key={key} event={events[key]} />)}
    </>
  )
}
export default List