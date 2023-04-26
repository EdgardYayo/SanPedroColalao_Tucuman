import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps } from '../../utils/stepsChatbot';

function Chatbot() {

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
            speechSynthesis={{ enable: false, lang: 'es' }}
            headerTitle="Guia Virtual de San Pedro Colalao"
            steps={steps}
            {...config}
        />
        </ThemeProvider>
    </div>
  )
}

export default Chatbot