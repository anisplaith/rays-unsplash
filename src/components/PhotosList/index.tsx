import React, { useEffect, useState } from "react";
import photoService from "../../services/api/photoService";
import { Box, BoxLabel, ButtonDelete, Label, Page, Photo } from "./style";

interface dataPhoto { // tipagem para evitar o tipo never na variável list
    id: number
    url: string
    label: string
}
interface dataPhotoDelete {
    handleDisplay: any
    getId: any
    getChange: any
    search: any

}

export default function PhotosList({handleDisplay, getId, getChange, search}: dataPhotoDelete){
    // o valor do search chega até aqui, falta só arrumar uma forma de filtrar as fotos.
    const [list, setList] = useState<dataPhoto[]>();

    const filteredList = list?.filter(
        (photo) => {
            if(search){
                return photo.label.toLowerCase().includes(search)
            } else{
                return photo
            }
        })
    




    function integration (){
        photoService.getPhoto().then( response => {
            setList(response?.data.photos);
            
        })

    }

    useEffect(()=>{integration()}, [getChange])


    function deleteImage(id: number){
        handleDisplay(true)
        getId(id)

    }

    

    return(
        <Page>
            <Box>
                { 
                    filteredList?.map((item => (
                        <BoxLabel key={item.id}>
                            <Label>{item.label}</Label>
                            <ButtonDelete onClick={() => deleteImage(item.id)}>delete</ButtonDelete>
                
                            <Photo src={item.url} />
                            

                        
                        </BoxLabel>
                        
                        

                    ))).reverse()
                }
            
            </Box>
           
        </Page>
    )

}