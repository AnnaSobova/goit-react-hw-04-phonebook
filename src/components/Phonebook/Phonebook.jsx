import {useState }from 'react';
import FormPhonebook from './Form/Form';
import InputName from './Input/InputName';
import InputNumber from './Input/InputNumber';
import LabelPhoneBook from './Label/Label.styled';
import ButtonSubmit from './Button/ButtonSubmit';

const Phonebook =({onSubmit})=> { 
       const [name, setName]= useState('');
       const [number,setNumber]= useState('');
      
         const handleChange = e =>{
        //  const{name,value}=event.currentTarget;??
         switch (e.currentTarget.name){
         case 'name':
         setName (e.currentTarget.value);
         break;
         case 'number':
         setNumber(e.currentTarget.value)
         break;
         default:
         return;
        }
       };

       const reset =()=>{
        setName('');
        setNumber('');
       };

     const clickOnBtnSubmit=event=>{
        event.preventDefault();
        onSubmit({name,number});
        reset();
      };
     
        return(
            <>
            <FormPhonebook onSubmit={clickOnBtnSubmit}>
                <LabelPhoneBook title="Name">     
            <InputName value={name} onChange={handleChange}/>
            </LabelPhoneBook>
            <LabelPhoneBook title="Number">
            <InputNumber value={number} onChange={handleChange}/>
            </LabelPhoneBook>
           <ButtonSubmit text="Add contact"/>
            </FormPhonebook>
            </>
        );
       }
    

export default Phonebook;



