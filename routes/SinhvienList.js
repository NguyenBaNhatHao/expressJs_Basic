var express = require('express');
var router = express.Router();
var sinhvien =[
    {Id:1,Name:'hao',MSSV:'1906821982'},
    {Id:2,Name:'tai',MSSV:'1906821990'},
    {Id:3,Name:'tan',MSSV:'1906821935'},
    {Id:4,Name:'thoai',MSSV:'1906824682'}
]
router.get('/show', (req,res) =>{
    res.send(sinhvien)
});
router.get('/show/:id', (req,res) =>{
    let checkId = sinhvien.find(c => c.Id == parseInt(req.params.id));
    if(!checkId){
        res.status(400).send('Erro to find id');
    }else{
        res.status(200).send(checkId)
    }
});
router.post('/sinhvien', (req,res) =>{
    if(!req.body.Name){
        res.status(400).send('xin hay nhap ten !')
        return;
    }
    const newSinhvien ={
        id: sinhvien.length+1,
        Name: req.body.Name,
        MSSV: req.body.MSSV
    }
    sinhvien.push(newSinhvien);
    res.send(sinhvien);
});
router.put('/sinhvien/:id', (req,res) =>{
    let checkId = sinhvien.find(c => c.Id == parseInt(req.params.id));
    checkId.Name = req.body.Name
    res.send(sinhvien);
});
router.delete('/sinhvien/:id', (req,res)=>{
    let checkId = sinhvien.find(c => c.Id == parseInt(req.params.id));
    const index = sinhvien.indexOf(checkId);
    sinhvien.splice(index, 1);
    res.send(checkId)
});
module.exports = router;