const url = 'http://localhost:8000';



const uploadImage = (req,res) => {
    if(!req.body.file){
        return res.status(404).json({msg:'file not found'})
    }
    const imageUrl = `${url}/file.${req.body.name}`;

    return res.status(200).json({imageUrl});
}

module.exports = uploadImage;