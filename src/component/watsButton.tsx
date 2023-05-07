import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Wats(){
    return (
        <FloatingWhatsApp 
        phoneNumber={'4427832566'} 
        accountName={'Dr. Sergio Valdovinos Estrada'}  
        statusMessage={""}
        chatMessage = {"Hola, en que te puedo ayudar"}
        placeholder={"Escribe tu mensaje"}
        avatar='logoNegro.jpg'
        />
    )
};