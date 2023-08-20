Neste PR, implementamos uma funcionalidade que permite ao usuário adicionar mais detalhes a cada tarefa que é criada.

Aqui estão as etapas de interação do usuário:

O usuário clica em "Adicionar Pasta" na barra lateral, que invoca uma janela flutuante que permite ao usuário nomear a pasta.
Depois que a pasta é nomeada e salva, ela é armazenada abaixo do botão "Adicionar Pasta" na barra lateral.
Ao clicar na pasta, o componente TaskList é renderizado, onde o usuário pode adicionar uma nova tarefa com nome, responsável, data e prioridade.
Depois de salvar a tarefa, ela é exibida na lista de tarefas.
Quando o usuário clica em uma tarefa salva, uma caixa de texto é aberta, que está associada a essa tarefa específica.
O usuário pode digitar mais detalhes na caixa de texto, que serão salvos e associados a essa tarefa.
As alterações específicas que fizemos incluem:

Modificamos a estrutura da tarefa para incluir um novo campo, details.
Adicionamos uma nova função, handleTaskDetailsSave, no componente TaskList para lidar com a gravação dos detalhes da tarefa.
Passamos a nova função handleTaskDetailsSave para o componente DetailedTask como uma prop.
No componente DetailedTask, adicionamos uma nova funcionalidade que permite ao usuário editar os detalhes da tarefa e salvá-los.
Todas as informações são persistentes entre as sessões do navegador graças ao uso do localStorage e do useEffect.

Os componentes modificados neste PR incluem App, Sidebar, FloatingWindow, OptionsWindow, TaskList e DetailedTask.







