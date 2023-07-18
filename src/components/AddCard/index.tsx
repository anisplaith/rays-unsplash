import React, { useState } from 'react'
import { Page, ButtonBox, CancelButton, InputCard, SubmitButton, Title, TitleInput, Box } from './style'
import photoService from '../../services/api/photoService';

interface dataAddCard {
    display: boolean
    handleDisplay: any
    getChange: any


}
export default function AddCard ({display, handleDisplay, getChange}: dataAddCard){

    const [label, setLabel] = useState<string>('');
    const [url, setURL] = useState<string>('');
    
    function getLabel (event: any){
        setLabel(event)
        console.log(label)
    }
    function getURL (event: any){
        setURL(event)
        console.log(url)
    }

    function cancelButton (){
        setLabel('')
        setURL('')
        handleDisplay(false)
    }

    const onSubmit =  () => {
        if (label !== ''){
            const newPhoto = {id: Date.now(), url: url, label: label};
            photoService.postPhoto(newPhoto).then(response => {
            console.log(JSON.stringify(response?.data.photo))
            getChange(Date.now())
            alert('Photo included ✨')
            setLabel('')
            setURL('')
            
         })
        } else{alert("The Label can't be blank, write something!")}
        
        

    }
   
    
    
    return(
        
            <Page display = {display}>
                <Box>
                    <Title>Add new Photo</Title>

                    <TitleInput>Label:</TitleInput>
                    <InputCard
                        onChange={(event:any) => getLabel(event.target.value)}
                        value={label}
                        minLength = {1}
                        maxLength = {400}
                        placeholder = {'Write something... ✍🏽'}
                     />

                    <TitleInput>Photo URL:</TitleInput>
                    <InputCard
                        onChange={(event:any) => getURL(event.target.value)}
                        value={url}
                        placeholder = {'Add a link to a Photo... 🔗'}
                        
                    />

                    <ButtonBox>
                        <CancelButton type='button' onClick={cancelButton}> Cancel</CancelButton>
                        <SubmitButton type='submit' onClick={onSubmit}>Submit</SubmitButton>

                    </ButtonBox>
                    
                </Box>
                
            </Page>
        
    )
}