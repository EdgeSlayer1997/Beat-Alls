const { Sequelize } = require('sequelize');

const db = new Sequelize('be0ltom5pngxh5y4nlbr', 'uvjal91293olcsx9', 'vPF8NwNxcYy6m03wiZOM', {
  host: 'be0ltom5pngxh5y4nlbr-mysql.services.clever-cloud.com/',
  dialect: 'mysql',
  port: 3306
});

async function authenticate() {
  try {
    await db.authenticate();
    console.log('Conexión establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}
authenticate();

module.exports = db;
