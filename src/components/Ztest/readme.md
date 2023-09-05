const uploadImageCallBack = async (file) => {
  const url = await uploadToStorage(`imagens/${tarefa.id}/${file.name}`, file);
  return {
    data: {
      component: (
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <Resizable
            width={200}
            height={200}
            minConstraints={[100, 100]}
            maxConstraints={[500, 500]}
            lockAspectRatio={true}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          >
            <img
              src={url}
              alt="example"
              width="100%"
              height="100%"
              style={{ objectFit: 'cover' }}
              onClick={() => console.log("Imagem clicada")}
            />
          </Resizable>
        </div>
      ),
    },
  };
};
