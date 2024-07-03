import prisma from '../prisma';

async function getUserData() {
  
    try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    throw error;
  }finally {
    await prisma.$disconnect()
  }
}

export default getUserData;
