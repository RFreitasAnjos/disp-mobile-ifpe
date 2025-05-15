import axios from 'axios';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useEffect } from 'react';

const ContactList = ({ navigation }) => {

    const [contactId, setContactId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [contacts, setContacts] = useState([]);
    
    

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/contact');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);
    const handleAddContact = async () => {
        try {
            const newContact = { name, email, telefone };
            const response = await axios.post('http://localhost:3000/contact', newContact);
            setContacts([...contacts, response.data]);
            setName('');
            setEmail('');
            setTelefone('');
            alert('Contato adicionado com sucesso!');
            navigation.navigate('contactsUpdate');
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };
    const handleDeleteContact = async (id) => {
        try {
            await axios.delete(`hhttp://localhost:3000/contact/${id}`);
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
        <Text>Telefone</Text>
        <Input
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          autoCapitalize="none"
          style={style.input}
        />
        <View>
          <Button
            style={style.buttons}
            title="Adicionar Contato"
            onPress={handleAddContact}
          />
        </View>
        {/* <Text>Lista de Contatos</Text>
        {contacts.map(contact => (
          <View key={contact.id}>
            <Text>{contact.name}</Text>
            <Text>{contact.email}</Text>
            <Button
              title="Excluir"
              onPress={() => handleDeleteContact(contact.id)}
            />
            <Button
              title="Atualizar"
              onPress={() => {
                navigation.navigate('contactsUpdate', { contact });
              }}
            />
          </View>
        ))} */}
      </View>
    </View>
  );
}
const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
  },
  input: {
    marginBottom: 10,
  },
  buttons: {
    marginTop: 10,
  },
};
export default ContactList;