'use server'

import prisma from '../prisma';

interface FormResponse {
  message: string;
  type: boolean;
}
export async function createUser(formData: FormData): Promise<FormResponse> {


  

  try {
    const nome = formData.get('name') as string;
    const email = formData.get('email') as string;
    const telefone = formData.get('telefone') as string;
    const senha = formData.get('senha') as string;

    
    if (!nome || typeof nome !== 'string') {
      return { message: 'Nome é obrigatório', type: false };
    }

    if (!email || typeof email !== 'string') {
      return { message: 'Email é obrigatório', type: false };
    }

    if (!senha || typeof senha !== 'string') {
      return { message: 'Senha é obrigatória', type: false };
    }

    if (telefone && !/^[0-9]{10,11}$/.test(telefone)) {
      return { message: 'Número de telefone inválido. Formato esperado: xx9xxxxxxxx', type: false };
    }




    const user = await prisma.user.create({
      data: {
        name: nome,
        email: email,
        telefone: telefone,
        senha: senha
      },
    });
    console.log('Usuário cadastrado:', user);

    if (nome && email) {
      console.log('Cadastro realizado com sucesso');
      return { message: 'Cadastro realizado com sucesso', type: true };
    } else {
      throw new Error('Nome e/ou email não foram fornecidos');
    }
  } catch (error) {
    console.error('Erro ao realizar o cadastro:', error);
    return { message: 'Erro ao realizar o cadastro', type: false };
  }
}