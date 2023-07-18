import React, { useState } from 'react'
import photoService from '../../services/api/photoService'
import { Box, ButtonBox, CancelButton, InputCard, Title, TitleInput } from '../AddCard/style'
import { DeleteButton, Page } from './style'

interface DeleteInfo {
    displayDeleteInfo: boolean
    setDisplayDelete: any
    id: any
    getChange: any

}
export function DeleteCard ({displayDeleteInfo, setDisplayDelete, id, getChange}: DeleteInfo){ // cancelar

    const [getInputData, setInputData] = useState<string>()

    function confirmDel (){
        if(getInputData === 'delete, please'){
            photoService.deletePhoto(id).then(response => {
                alert(`Photo deleted ❌`)
                setInputData('')
                getChange(Date.now())
                setDisplayDelete(false)

                
        })

        } else{
            alert("Ops! That's not right, try again! ;)")
        }
    }

    function cancelDelete (){
        setInputData('')
        setDisplayDelete(false)
        
    }


    return(
        <Page displayDelete = {displayDeleteInfo}>
            <Box style={{height: '225px'}}>
                <Title> Are you sure?</Title>
                <TitleInput>Write the exacly same text to confirm: 
                    <strong 
                        style={{padding: '0px 9px', color: '#fb6767'}}> delete, please
                    </strong></TitleInput>
                <InputCard 
                    onChange={(event:any) => {setInputData(event.target.value);}}
                    value = {getInputData}
                    placeholder = {'Write the text here to delete... 🧨'}
                />
                <ButtonBox>
                    <CancelButton type='button' onClick={cancelDelete}> Cancel</CancelButton>
                    <DeleteButton type='button' onClick={confirmDel}> Delete </DeleteButton>

                </ButtonBox>
            </Box>
            

        </Page>
    )
}
