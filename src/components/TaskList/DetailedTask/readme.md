O problema principal aqui é que o valor da URL está sendo salvo como `true` no seu banco de dados, o que evidentemente está errado. Você deve garantir que a URL do arquivo anexado seja uma string que aponte para o local do arquivo no armazenamento.

Primeiro, certifique-se de que a função `uploadToStorage` realmente retorna uma URL de string. Você pode adicionar alguns logs de depuração para verificar o que está sendo retornado:

```javascript
const uploadToStorage = async (path, file) => {
  // Seu código para upload
  console.log("URL do armazenamento:", storageUrl);
  return storageUrl;
};
```

Depois que confirmar que a URL é uma string, você deve assegurar-se de que a mesma está sendo escrita corretamente no banco de dados. Mais uma vez, adicione alguns logs de depuração:

```javascript
const handleFileChange = async (e) => {
  const file = e.target.files[0];
  try {
    const storageUrl = await uploadToStorage(`anexos/${tarefa.id}/${file.name}`, file);
    console.log("URL do armazenamento:", storageUrl); // Para depuração
    const newFile = { name: file.name, url: storageUrl };
    setFiles([...files, newFile]);

    // Salvar informação de anexo no Firebase
    await writeToDatabase(`tarefas/${tarefa.id}/anexos`, [...files, newFile]);
  } catch (error) {
    console.error("Erro ao carregar arquivo:", error);
  }
};
```

Faça essas alterações e veja quais são os valores que aparecem nos logs de depuração. Se a URL do armazenamento for uma string e mesmo assim o erro persistir, então o problema pode estar em outra parte do código que não foi compartilhada aqui.