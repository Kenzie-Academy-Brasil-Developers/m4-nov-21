import * as yup from 'yup'

const userSchema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

export default userSchema