import React from 'react'
import { Button1, Button, Container1 } from './header.style'

function Body() {
    return (
        <Container1>
            <Button1 onClick={() => alert("Masukkan jumlah array")}> Masukkan jumlah array</Button1>
            <Button1>Mulai!</Button1>
        </Container1>
    )
}
export default Body