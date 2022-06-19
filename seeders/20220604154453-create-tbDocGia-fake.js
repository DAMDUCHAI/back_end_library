'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tbdocgia', [{
       MaThongTinChung: 1,
       MaThe: 1,
       MaAcount:1,
       createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
     },{
      MaThongTinChung: 2,
      MaThe: 2,
      MaAcount:2,
      createdAt: "2021-03-26 07:06:14",
     updatedAt: "2021-03-26 07:06:14",
    },
    {
      MaThongTinChung: 3,
      MaThe: 3,
      MaAcount:3,
      createdAt: "2021-03-26 07:06:14",
     updatedAt: "2021-03-26 07:06:14",
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbdocgia', null, {});
     
  }
};
