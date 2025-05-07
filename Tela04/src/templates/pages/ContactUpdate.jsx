import { useRoute } from "@react-navigation/native";
import ContactController from "../../modules/controller";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, Input } from "react-native-elements";


function ContactUpdate({ navigation }) {
    const route = useRoute();
    const { user } = route.params;

    const[name, setName] = useState(user.name);
    const[email,setEmail] = useState(user.email);
    const[number,setNumber] = useState(user.number);

    const handleUpdate = async () => {
        try{
            await ContactController.updateContact({
                id: user.id,
                name,
                email,
                number
            });
        } catch(error){
            setTimeout(() => {
                Alert.alert("Falha ao atualizar contato");
                navigation.navigate("contacts");
            }, 30000)
        }
    };
    const handleDelete = async () => {
        try{
            await ContactController.deleteContact(user.id);
            Alert.alert("Contato removido");
            navigation.navigate("contacts");
        } catch(error){
            setTimeout(() => {
                Alert.alert("Falha ao deletar contato");
                navigation.navigate("contacts");
            }, 30000)
        }
    };
    return (
        <SafeAreaView>
            <View style={{gap:12}}>
                <Input
                    label='Nome'
                    value={name}
                    onChangeText={setName}
                    labelStyle={{color: 'black'}}
                    /*inputStyle={}*//>
                <Input
                    label='E-mail'
                    value={email}
                    onChangeText={setEmail}
                    labelStyle={{color: 'black'}}/>
                <Input
                    label='Telefone'
                    value={number}
                    onChangeText={setNumber}
                    labelStyle={{color: 'black'}}/>
                <Button title="Alterar" onPress={handleUpdate}/>
                <Button title="Excluir" onPress={handleDelete}/>
            </View>
        </SafeAreaView>
    )

};

export default ContactUpdate;