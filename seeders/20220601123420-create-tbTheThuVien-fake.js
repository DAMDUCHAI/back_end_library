'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('tbthethuviens', [{
         NgayCap: "2021-03-26 07:06:14",
         HSD: "2021-03-26 07:06:14",
         TenThuVien: 'FPT',
         createdAt: "2021-03-26 07:06:14",
         updatedAt: "2021-03-26 07:06:14",
       },
       {
        NgayCap: "2021-03-26 07:06:14",
        HSD: "2021-03-26 07:06:14",
        TenThuVien: 'FUT',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
      },
      {
        NgayCap: "2021-03-26 07:06:14",
        HSD: "2021-03-26 07:06:14",
        TenThuVien: 'HCM',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
      }
      ]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tbthethuviens', null, {});
  }
};
