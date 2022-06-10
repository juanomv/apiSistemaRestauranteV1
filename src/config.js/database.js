import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('Restaurante', 'root', 'juanomv2000', {
    host: 'localhost',
    dialect:  'mysql' ,
    
    logging:false
  });

 export default sequelize; 