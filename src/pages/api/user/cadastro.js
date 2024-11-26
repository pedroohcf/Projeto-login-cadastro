import {cadastro} from '../../../../services/user'

export default function Handler(req, res){
try{
    const NewUser = cadastro(req.body)
    res.status(201).json(NewUser)

}catch (err){
    res.status(400).json(err.message)
}
}