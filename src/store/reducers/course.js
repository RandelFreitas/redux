const INITAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        {id: 1, title: "Primeira aula"},
        {id: 2, title: "Segunda aula"}
      ]
    },
    {
      id: 2,
      title: "Iniciando com Redux",
      lessons: [
        {id: 1, title: "Primeira aula"},
        {id: 2, title: "Segunda aula"}
      ]
    },
  ]
};

export default function course(state = INITAL_STATE, action){
  if (action.type === 'TOGGLE_LESSON'){
    return {
      ...state,
      activeModule: action.module,
      activeLesson: action.lesson
    }
  }
  return state;
};