import Link from 'next/link';
import styles from '../styles/login.module.css';
import LoginCard from '@/components/logincard/logincard';
import Input from '../components/logincard/input/input';
import Button from '@/components/logincard/button/button';
import { useRef } from 'react';
import api from './api/api';

export default function Loginpage(){
    const emailRef = useRef('')
    const senhaRef = useRef('')
   async function  handleLogin (e){
        e.preventDefault()
        if(emailRef.current && senhaRef.current){

            let email = emailRef.current.value
            let senha = senhaRef.current.value
    
            try{
                const response =  await api.post('/login', {email:email,senha:senha})
                if (response.status == 200){
                    alert('Voce logou com sucesso')
                }else{
                    alert('Voce nao logou com sucesso')
            
                }
               
                
    
    
            }catch (err){
                alert('Deu erro ', err)
            }
             emailRef.current.value = ''  
             senhaRef.current.value = ''
                
        }
    }
    return(
        <div className={styles.background}>
             <LoginCard title="Entre em sua Conta">
                <form onSubmit={handleLogin} className={styles.form}>
                <Input typeInput='email' placeholderInput='Digite seu email' refInput={emailRef}/>
                <Input typeInput='password' placeholderInput='Digite sua senha' refInput={senhaRef} />
                <Button type ='submit'>Entre na Sua Conta</Button>
                <Link href="./cadastro">Ainda não possui uma conta?</Link>
                </form>
              

            
            
           </LoginCard>
            
           
        </div>
    )
}