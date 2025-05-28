import { useEffect, useState } from "react";
import axios from 'axios';
import { View, Text, Button, Image, FlatList, TouchableOpacity,Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { CLOUD_NAME, UPLOAD_PRESET } from '@env'

const Send = ({navigation}) => {
    const [file, setFile] = useState('');

    useEffect(() => {
        (async ()=> {
            const { status } = await ImagePicker.requestMediaLibrary
        })
    },[])

    const handleUploadToCloudinary = async (photo) => {
        setUploading(true);
        const data = new FormData();
        data.append('file', {
            uri: photo.uri,
            type: photo.type || 'image/jpeg',
            name:photo.fileName || 'upload.jpg',
        });
        data.append('upload_preset', UPLOAD_PRESET);

        try{
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,{
                method: 'POST',
                body: data,
            });
            const result = await res.json();
            if(result_secure_url){
                setImage((prev) => [result, ...prev]);
            } else {
                Alert.alert('Erro no upload', 'Falha ao enviar imagem para Cloudinary')
            }

        } catch ( err ){
            Alert.alert('Erro no upload', err.message)
        } finally {
            setUploading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Button title="Selecionar imagem" onPress={pickImage} />
            {uploading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 10 }} />}
            {loadingImages ? (<ActivityIndicator size="large" color="green" style={{ marginTop: 20 }} />) : (
                <FlatList
                data={images}
                keyExtractor={(item) => item.public_id}
                renderItem={renderItem}
                contentContainerStyle={{ marginTop: 20 }}
                />
            )}
        </View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
imageContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 10 },
image: { width: 120, height: 120, borderRadius: 8 },
deleteButton: { backgroundColor: '#ff4d4d', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6 },
deleteText: { color: '#fff', fontWeight: 'bold' },
});

export default Send;