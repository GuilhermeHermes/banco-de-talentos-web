'use server'

import prisma from '../prisma';

interface FormResponse {
  message: string;
  type: boolean;
}
export async function updateUser(formData: FormData): Promise<FormResponse> {


  

  try {
    const nome = formData.get('name') as string;
    const email = formData.get('email') as string;
    const skills = formData.get('skills') as string;
   

    
    if (!nome || typeof nome !== 'string') {
      return { message: 'Nome é obrigatório', type: false };
    }

    if (!email || typeof email !== 'string') {
      return { message: 'Email é obrigatório', type: false };
    }





    const updatedUser = await prisma.user.update({
      where: {
        email: email,
      },
        data: {

            skills: skills,
        },
    });


    console.log('Usuário cadastrado:', updatedUser);

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