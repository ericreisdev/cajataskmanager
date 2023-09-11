import { db, storage } from "./firebaseConfig";  // Importe do seu arquivo de configuração
import { ref, set, get, child } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

// Funções para o Realtime Database
export const writeToDatabase = async (path, data) => {
  try {
    const dbRef = ref(db, path);
    await set(dbRef, data);
    console.log(`Dados escritos com sucesso em ${path}`);
    return true;
  } catch (error) {
    console.error(`Erro ao escrever no database: ${error}`);
    return false;
  }
};

export const readFromDatabase = async (path) => {
  try {
    const dbRef = child(ref(db), path);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      console.log(`Dados lidos com sucesso de ${path}`);
      return snapshot.val();
    } else {
      throw new Error("Nenhum dado disponível!");
    }
  } catch (error) {
    console.error(`Erro ao ler do database: ${error}`);
    return null;
  }
};

// Funções para o Firebase Storage
export const uploadToStorage = async (path, file) => {
  try {
    const storageReference = storageRef(storage, path);
    await uploadBytes(storageReference, file);
    const url = await getDownloadURL(storageReference); // Obtenha a URL aqui
    console.log(`Arquivo enviado com sucesso para ${path}. URL: ${url}`);
    return url; // Retorne a URL aqui
  } catch (error) {
    console.error(`Erro ao enviar arquivo para o storage: ${error}`);
    return null;
  }
};


// (Demais importações permanecem iguais)

// ... (Outras funções permanecem iguais)

export const downloadFromStorage = async (path) => {
  try {

  
    const storageReference = storageRef(storage, path);
    const url = await getDownloadURL(storageReference);
    console.log(`Download do URL realizado com sucesso de ${path}`);
    return url;
  } catch (error) {
    if (error.code === 'storage/object-not-found') {
      console.log("O objeto não foi encontrado, mas isso é esperado se você ainda não fez upload de nenhum arquivo.");
      return null;
    }
    console.error(`Erro ao baixar arquivo do storage: ${error}`);
    return null;
  }
};

