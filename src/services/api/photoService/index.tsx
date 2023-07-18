import api from "../api";

export default {
    async postPhoto (photoData: {url:string, label: string}){
        try{
            const response = await api.post('/photo', photoData);
            return response
        } catch(err){
            console.log(err)
        }
    },
    async getPhoto(){
        try{
            const response = await api.get('/photos')
            return response;


        } catch(err){
            console.log(err);
        }
    },
    async deletePhoto(id: number){
        try{
            const response = await api.delete(`/delete/${id}`)
            return response;


        } catch(err){
            console.log(err);
        }
    }
}