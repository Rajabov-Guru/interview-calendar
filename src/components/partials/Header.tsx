import React, {useContext, useRef, useState} from 'react';
import Flex from "../UI/ContainerComponents/Flex";
import Title, {Text} from "../UI/Title";
import Button from "../UI/Button";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Modal from "../UI/ContainerComponents/Modal";
import useModal from "../../hooks/useModal";
import {doBeautify} from "../../helpers/dateHelper";
import {IEvent} from "../../types";
import styles from '../UI/Input/input.module.css';

const Header = () => {
    const {store} = useContext(Context);
    const {status, show, close} = useModal(false);
    const [desc, setDesc] = useState('');

    function closeModal(){
        close();
        setDesc('');
    }

    function addEvent(){
        if(store.selectedDate){
            const event:IEvent ={
                day:store.selectedDate,
                description:desc,
            }
            store.addEvent(event);
            store.setSelectedDate(null);
        }
        closeModal();
    }

    return (
        <Flex padding={'5px 30px'} background={'white'}>
            <Title>Interview Calendar</Title>
            <Button onClick={show} disabled={store.selectedDate===null} fontSize={'40px'}>{'+'}</Button>
            <Modal isActive={status} close={close}>
                <Text align={'center'}>Создать событие на</Text>
                <Text align={'center'}>{store.selectedDate?doBeautify(store.selectedDate):''}</Text>
                <input value={desc} onChange={(e:any)=>setDesc(e.target.value)} className={styles.my_input} type={'text'}/>
                <Flex padding={'0 15px'}>
                    <Button onClick={closeModal}>Отмена</Button>
                    <Button onClick={addEvent}>Ок</Button>
                </Flex>
            </Modal>
        </Flex>
    );
};

export default observer(Header);