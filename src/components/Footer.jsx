import React from "react"

var date=new Date();

function Footer(){

    return <footer> <p>Copyright ©️ {date.getFullYear()}</p>
            <p>Made with <i class="fas fa-heart"></i> by The Wordsmith </p>
            </footer> 
}

export default Footer;