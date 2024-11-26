let users = []

export default function cadastro(body){
const user = users.find(({email}) => email === body.email)
if (user) throw new Error('Usuario já cadastrado')

user.push(body)
return body
}
export default function login(body){
    const user = users.find(({email}) => email === body.email)
    if (!user) throw new Error('Usuario não encontrado')
   if (user.password !== body.password) throw new Error('Senha Incorreta')

    return user
        
}