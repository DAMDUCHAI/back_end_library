const {tbAcount,sequelize} =require('../models')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //token 
const createAcount = async (req, res) => {
  const {Email} = req.body; 
 try {
   const PassWord = '123a123@';
       // tạo ra một chuỗi ngẫu nhiên
       var salt = bcrypt.genSaltSync(10);
       // mã hóa salt + password
       const hashPassword = bcrypt.hashSync(PassWord, salt);
   const Role = 'USER'
      const newAcount = await tbAcount.create({Email,PassWord:hashPassword,Role});
      res.status(201).send(newAcount);
    } catch (error) {
      res.status(500).send(error);
    }

  };
const getListAcount = async (req, res) => {
    
    try {

        const acountList = await tbAcount.findAll();
        res.status(200).send(acountList);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };
const getAcount= async (req, res) => {
  const { id } = req.params;
  try {
    const acount =await tbAcount.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(acount);
  } catch (error) {
    res.status(500).send(error)

  }
}
const updateAcount = async (req, res) => {
  const { id } = req.params;
  const {Email,PassWord,Role} = req.body; 
  try {
    const acount = await tbAcount.findOne({
      where: {
        id,
      },
    });
    acount.Email = Email;
    acount.PassWord = PassWord;
    acount.Role = Role;
    await acount.save();

    res.status(200).send(acount);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteAcount = async (req, res) => {
  const { id } = req.params;
  try {
    await tbAcount.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { Email, PassWord } = req.body;
  const acount = await tbAcount.findOne({
    where: {
      Email,
    },
  });
  if (acount) {
    const isAuth = bcrypt.compareSync(PassWord, acount.PassWord);
    console.log(isAuth);
    if (isAuth) {
      const token = jwt.sign(
        { Email: acount.Email, Role: acount.Role },
        "team3_swp391",
        { expiresIn: 60 * 60 }
      );
      res.status(200).send({ message: "Đăng Nhập Thành Công ! ", token,Role: acount.Role ,id: acount.id});
    } else {
      res.status(500).send({ message: "Tài khoãng hoặc mật khẩu không đúng" });
    }
  } else {
    res.status(404).send({ message: "Không tìm thấy email phù hợp" });
  }
};
module.exports = {
 
    createAcount,
    getListAcount,
    getAcount,
    updateAcount,
    deleteAcount,
    login
 
  };