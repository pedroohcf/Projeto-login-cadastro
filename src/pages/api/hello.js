import {useState} from 'react';

export default async function backend(){
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [message,setMessage] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const loginData = {
        email: email,
        senha: senha
    }
    
    try{
        const response = await fetch('http://http:127.0.0.1:5000/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData),
        })
    } catch{
        return "erro"
    }
    
}
const data = await response.json();

if (response.ok){
    setMessage('Login Realizado com sucesso')
}
else ``