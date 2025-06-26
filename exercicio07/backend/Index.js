const cloudinary = require('cloudinary');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


cloudinary.config({ 
    cloud_name: 'exercice-disp', 
    api_key: '848875746746698', 
    api_secret: 'Root' // Click 'View API Keys' above to copy your API secret
});

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/imagens', async(req,res) => {
    const { tag = 'aula08ifpe'} = req.query;
    
    try {
        const result = await cloudinary.api.resources_by_tag(tag,{
            type: 'upload',
            prefix: '',
            max_results: 100,
        });
        res.json(result.resources);
    } catch ( err ) {
        console.error("Error:", err);
        res.status(500).json({ error: 'Erro ao buscar imagens' });
    }
});

app.delete('/delete-image', async(req,res) => {
    if(!public_id){
        return res.status(400).json({ error: 'public_id é obrigatório.'});
    }

    try{
        const result = await cloudinary.uploader.destroy(public_id);
        res.json(result);
    } catch ( err ) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao deleter imagem.'});
    }
});

app.listen(PORT, '0.0.0.0', () => {
    try{
        console.log(`Servidor rodando em http://10.31.88.99:${PORT}`)
    } catch ( err ) {
        console.error("Erro: ", err)
    }
});
