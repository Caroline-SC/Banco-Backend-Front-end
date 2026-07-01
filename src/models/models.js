import { DataTypes } from "sequelize";
import database from "../database.js"

const Account = database.define('Account',{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_completo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  tipo: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isIn: [['corrente', 'poupanca']],
    },
  },
  senha: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'contas',
  timestamps: false,
});

const Transaction = database.define('Transacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  conta_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'contas',
      key: 'id',
    },
  },
  tipo: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isIn: [['deposito', 'saque', 'transferencia']],
    },
  },
  valor: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  conta_destino_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'contas',
      key: 'id',
    },
  },
}, {
  tableName: 'transacoes',
  timestamps: false,
});
export {Account, Transaction}
