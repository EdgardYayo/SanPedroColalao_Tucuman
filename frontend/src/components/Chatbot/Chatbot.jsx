import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

function Chatbot() {

    const steps = [
        {
            id: '0',
            message: 'Hola, ¿Como te llamas?',
            trigger: 1
        },
        {
            id: '1',
            user: true,
            trigger: 2
        },
        {
            id:'2',
            message: 'Hola {previousValue}, Bienvenida a San Pedro Colalao',
            trigger: '3'
        },
        {
            id:'3',
            message: 'Esperemos te la pases genial',
            end: true
        },

    ]

    const theme = {
        background:'#f5f5f5',
        headerBgColor: '#aebd38',
        headerFontSize: '20px',
        botBubbleColor: '#aebd38',
        headerFontColor: 'white',
        botFontColor: 'black',
        userBubbleColor: '#568234',
        userFontColor: 'black',
    };

    const config = {
        // botAvatar: "../../assets/images/logo.png",
        floating: true,
    };

  return (
    <div>
        <ThemeProvider theme={theme}>
        <ChatBot 
            headerTitle="Guia Virtual de San Pedro Colalao"
            steps={steps}
            {...config}
        />
        </ThemeProvider>
    </div>
  )
}

export default Chatbot