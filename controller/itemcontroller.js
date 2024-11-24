let items = [];

exports.CreateItem = (req, res) => {  // menambahkan item baru dari req.body ke arrray items
    const item = req.body ;
    items.push(items);  // disini ngemasukin data items nya ke array items. 
    res.status(201).send('Item berhasil dibuat');
}

exports.GetItems = (req, res) => {
    res.json(items);  // klien dapat respon atau umpan balik berupa JSON file
}

exports.updateItem = (req, res) => { // untuk memperbarui item,, pake paramteres id supaya itemnya bisa dibedakan.
    const { id } = req.params ;
    const updateItem = req.body;
    itmes[id] = updateItem;
    res.send('Item Berhasil di update');
}

exports.DeleteItem = (req, res) => { // sebaliknya dari update, yaitu buat ngehapus item, (pake splice.)
    const {id} = req.params ;
    itmes.splice(id, 1);
    res.send('Item Berhasil Dihapus');
}