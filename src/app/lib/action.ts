'use server';

import prisma from './prisma';

interface FormResponse {
  message: string;
  type: boolean;
}
export async function addColab(formData: FormData): Promise<FormResponse> {


  

  try {
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;

    
    console.log('Usuário cadastrado:');

    if (nome && email) { // Verifica se ambos nome e email estão preenchidos
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
