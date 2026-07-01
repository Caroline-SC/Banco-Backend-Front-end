import { Account, Transaction } from '../src/models/models.js'; 
import sequelize from '../src/database.js';

export const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); 
    console.log('Database tables created sucefully');

    const contas = [
      { nome_completo: 'Lilia Nogueira', 
        cpf: '123.456.789-00', 
        email: 'lialinda@gmail.com', 
        tipo: 'corrente', 
        senha: 'senha_criptografada1'},
      { nome_completo: 'Maiara Lopes', 
        cpf: '123.123.321-00', 
        email: 'maiazzinha.123@gmail.com', 
        tipo: 'corrente', 
        senha: 'senha_criptografada2' },
      { nome_completo: 'Pablo Brito', 
        cpf: '067.360.180-00', 
        email: 'obrito.pp@outlook.com', 
        tipo: 'poupanca', 
        senha: 'senha_criptografada3' },
        {nome_completo: 'Reginaldo Suarez', 
        cpf: '098.166.888-00', 
        email: 'regissuarez001@gmail.com', 
        tipo: 'poupanca', 
        senha: 'senha_criptografada4' }];

    await Account.bulkCreate(contas);
            
    console.log('Accounts added to the database successfully');
  } catch (err) {
    console.error('Error populating the database:', err.message);
  }
};
