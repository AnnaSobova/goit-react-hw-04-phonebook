import {Component }from 'react';
import FormPhonebook from './Form/Form';
import InputName from './Input/InputName';
import InputNumber from './Input/InputNumber';
import LabelPhoneBook from './Label/Label.styled';
import ButtonSubmit from './Button/ButtonSubmit';

class Phonebook extends Component{ 
    state = {
        name: '',
        number: '',
      };

      handleChange= event=>{
        const{name,value}=event.currentTarget;
        this.setState({[name]: value});
      };
        reset=()=>{
        this.setState({name:'',number:''});
      }
       
      clickOnBtnSubmit=event=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
      };
     
      

       render(){
        return(
            <>
            <FormPhonebook onSubmit={this.clickOnBtnSubmit}>
                <LabelPhoneBook title="Name">     
            <InputName value={this.state.name} onChange={this.handleChange}/>
            </LabelPhoneBook>
            <LabelPhoneBook title="Number">
            <InputNumber value={this.state.number} onChange={this.handleChange}/>
            </LabelPhoneBook>
           <ButtonSubmit text="Add contact"/>
            </FormPhonebook>
            </>
        );
       }
    }

export default Phonebook;



