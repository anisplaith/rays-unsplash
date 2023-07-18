const {response} = require('express');
const Photo = require('../models/Photo');



const create = async (req, res) => {
    try{
       
        const photo = await Photo.create(req.body);
        return res.status(200).json({photo});
    } catch(error){
        return res.status(500).json({error})
    }
}


const index = async (req, res) => {

    try{
        const photos = await Photo.findAll();
        return res.status(200).json({photos});
    } catch(error){
        return res.status(500).json({error});
    }

}

const destroy = async (req, res) => {
    const {id} = req.params;

    try{
        const deleted = await Photo.destroy({where: {id: id}});

        if(deleted){
            return res.status(200).json('Photo deleted')
        }

        throw new Error();

    } catch(error){

        return res.status(500).json("Photo not found")

    }
}

module.exports = {
    index,
    create,
    destroy,
};

