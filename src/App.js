import React, {useEffect, useState, useMemo, useCallback} from 'react';

function App(){

  const [tarefas, setTarefas] = useState([
    'Pagar netfuturo',
    'Estudar udemy'
  ]);

  const [input, setInput] = useState('');

  /*function handleAdd(){
    setTarefas([...tarefas, input]);
    setInput('');
  };*/
  //Função que substitui a handleAdd, economizando processamento
  const handleAdd = useCallback(() =>{
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);

  //Verifica diretamente da lista, a quantidade que existe
  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);

  //Busca lista em storage (componentDidMount)
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);
  
  //Salva lista em storage (componentDidUpdate)
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  return(
    <div align='center'>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Voce possui: {totalTarefas} tarefas</strong>
      <br/>
      <input type='text' placeholder='Insira algo para a lista' value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;