import axios from 'axios';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useEffect } from 'react';

export default function ContactList({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contacts, setContacts] = useState([]);
    

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);
    const handleAddContact = async () => {
        try {
            const newContact = { name, email };
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
            setContacts([...contacts, response.data]);
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };
    const handleDeleteContact = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            setContacts(contacts.filter(contact => contact.id !== id));
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    

  return (
    <View style={style.container}>
      <View style={style.form}>
        <Text>Lista de Contatos</Text>
        <Text>Nome</Text>
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          style={style.input}
        />
        <Text>E-mail</Text>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={style.input}
        />
      </View>
      <View>
        <Button
          style={style.buttons}
          title="Adicionar Contato"
          onPress={() => {
            navigation.navigate('contactsUpdate');
          }} />
      </View>
    </View>
  );
}