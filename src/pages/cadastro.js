import Link from 'next/link';
import styles from '../styles/login.module.css';
import LoginCard from "@/components/logincard/logincard";
import Input from '../components/logincard/input/input';
import Button from '@/components/logincard/button/button';
import { useRef } from 'react';
import api from './api/api';

export default function Cadastro(){
    let emailRef = useRef('')
    let senhaRef = useRef('')
    let nomeRef = useRef('')
   async function  handleCadastro (e){
        e.preventDefault()
        if(nomeRef.current && emailRef.current && senhaRef.current){

            let nome = nomeRef.current.value
            let email = emailRef.current.value
            let senha = senhaRef.current.value
    
            try{
                const response =  await api.post('/cadastro', {email:email,senha:senha, nome:nome})
                if (response.status == 201){
                    alert('Voce cadastrou com sucesso')
                }else{
                    alert('Voce nao cadastrou com sucesso')
            
                }
               
    
    
            }catch (err){
                alert('Deu erro ', err)
            }
            nomeRef.current.value = ''
            emailRef.current.value = ''
            senhaRef.current.value = ''
        }
    }
     

     
    return(
        <div className={styles.background}>
           
           <LoginCard title="Crie sua Conta">
           <form onSubmit={handleCadastro}className={styles.form}>
                <Input typeInput='text' placeholderInput='Digite seu nome'refInput={nomeRef}/>
                <Input typeInput='email' placeholderInput='Digite seu email' refInput={emailRef}/>
                <Input typeInput='password' placeholderInput='Digite sua senha' refInput={senhaRef} />
                <Button type='submit'>Cadastre sua Conta</Button>
                <Link href="./login">Ja possui uma conta?</Link>
                </form>
           </LoginCard>
            

        </div>
    )
}