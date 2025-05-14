import { Button, TextInput } from "react-native";

export default function ContactUpdate({navigation}) {
  
    const handleSave = () => {
        // Implement the save logic here
        console.log("Contact saved");
    }

    return (
    <View>
        <TextInput/>
        <TextInput/>
        <Button
          title="Salvar"
          onPress={handleSave}/>
    </View>
  );
}