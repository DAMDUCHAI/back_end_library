const {tbSach,sequelize,tbFieuSach,tbFieuSachChiTiet} =require('../models')
const createBook = async (req, res) => {
  const { Ten,MaTacGia,MaTheLoai,MaNXB,MaKeSach,AnhSach,NamXB,Gia,SoLgDauSach,SoLgHienTai,NoiDung} = req.body;
    try {
      const newBook = await tbSach.create({ Ten,MaTacGia,MaTheLoai,MaNXB,MaKeSach,AnhSach,NamXB,Gia,SoLgDauSach,SoLgHienTai,NoiDung });
      res.status(201).send(newBook);
    } catch (error) {
      res.status(500).send(error);
    }
    
  };

const getListBook = async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        const [results] = await sequelize.query(
          ` select tbsaches.id,tbsaches.NoiDung,tbsaches.Ten, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach',tbsaches.AnhSach,tbsaches.NamXB,tbsaches.Gia,tbsaches.SoLgDauSach,tbsaches.SoLgHienTai from tbsaches 
          inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
          inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
          inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
          inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id
           where tbsaches.Ten LIKE `%{name}%``
        )
        res.status(200).send(results);
      } else {
        const [results] = await sequelize.query(
          ` select tbsaches.id,tbsaches.NoiDung,tbsaches.Ten, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach',tbsaches.AnhSach,tbsaches.NamXB,tbsaches.Gia,tbsaches.SoLgDauSach,tbsaches.SoLgHienTai from tbsaches 
          inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
          inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
          inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
          inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id`
        )
        res.status(200).send(results);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
const getBook= async (req, res) => {
  const { id } = req.params;

    try {
    
        const [results] = await sequelize.query(
          ` select tbsaches.id,tbsaches.NoiDung,tbsaches.Ten, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach',tbsaches.AnhSach,tbsaches.NamXB,tbsaches.Gia,tbsaches.SoLgDauSach,tbsaches.SoLgHienTai from tbsaches 
          inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
          inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
          inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
          inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id
           where tbsaches.id = ${id}`
        )
        res.status(200).send(results);

    } catch (error) {
      res.status(500).send(error);
    }
}
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { Ten,MaTacGia,MaTheLoai,MaNXB,MaKeSach,AnhSach,NamXB,Gia,SoLgDauSach,SoLgHienTai,NoiDung} = req.body;
  try {
    const book = await tbSach.findOne({
      where: {
        id,
      },
    });
    book.Ten = Ten;
    book.MaTacGia = MaTacGia;
    book.MaTheLoai = MaTheLoai;
    book.MaNXB = MaNXB;
    book.MaKeSach = MaKeSach;
    book.AnhSach = AnhSach;
    book.NamXB = NamXB;
    book.Gia = Gia;
    book.SoLgDauSach = SoLgDauSach;
    book.SoLgHienTai = SoLgHienTai;
    book.NoiDung = NoiDung;
    await book.save();

    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await tbSach.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

//lay sach theo tac gia cu the
const getBookByAuthor = async(req,res)=>{
  const {id} =req.params
  try {
    const [results] = await sequelize.query(`select tbsaches.Ten, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach',tbsaches.AnhSach,tbsaches.NamXB,tbsaches.Gia,tbsaches.SoLgDauSach,tbsaches.SoLgHienTai from tbsaches 
    inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
    inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
    inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
    inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id where tbtacgia.id=${id}`)
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
  
  }


  //lay sach theo the loai cu the
const getBookByCategoryBook = async(req,res)=>{
  const {id} =req.params

  try {
    const [results] = await sequelize.query(`select tbsaches.Ten, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach',tbsaches.AnhSach,tbsaches.NamXB,tbsaches.Gia,tbsaches.SoLgDauSach,tbsaches.SoLgHienTai from tbsaches 
    inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
    inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
    inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
    inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id where tbtheloais.id= ${id}`)
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
  
  }

    //lay sach theo NXB cu the
const getBookByPublisher =async (req,res,)=>{
  const {id} =req.params

  try {
    const [results] = await sequelize.query(`select tbsaches.Ten, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach',tbsaches.AnhSach,tbsaches.NamXB,tbsaches.Gia,tbsaches.SoLgDauSach,tbsaches.SoLgHienTai from tbsaches 
    inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
    inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
    inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
    inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id where tbnhaxuatbans.id= ${id} `)
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
  
  }

    //lay sach theo kesach cu the
const getBookByBookshelf = async(req,res)=>{
  const {id} =req.params

  try {
    const [results] = await sequelize.query(`select tbsaches.Ten, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach',tbsaches.AnhSach,tbsaches.NamXB,tbsaches.Gia,tbsaches.SoLgDauSach,tbsaches.SoLgHienTai from tbsaches 
    inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
    inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
    inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
    inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id where tbkesaches.id= ${id}`)
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
  
  }


  const createBorrowBook = async (req, res) => {
    const {HenTra,SoLgMuonMax,MaThe} = req.body;
    

    let NgayMuon=new Date();
      try {
        const newBorrowBook = await tbFieuSach.create({NgayMuon, MaThe,HenTra,SoLgMuonMax});
        res.status(200).send(newBorrowBook);
      } catch (error) {
        res.status(500).send(error);
      }
      
    };



    const createBorrowDetaildBook = async (req, res) => {
      const {MaSach,MaFieuSach} = req.body;
      let MaTinhTrang=1
  

        try {
          const newBorrowDetaild = await tbFieuSachChiTiet.create({MaSach,  MaTinhTrang,MaFieuSach});
          res.status(200).send(newBorrowDetaild);
        } catch (error) {
          res.status(500).send(error);
        }
        
      };
module.exports = {
 
  getListBook,
  getBook,
  updateBook,
  deleteBook,
  createBook,
  getBookByAuthor,
  getBookByCategoryBook,
  getBookByPublisher,
  getBookByBookshelf,
  createBorrowBook,
  createBorrowDetaildBook

 
  };