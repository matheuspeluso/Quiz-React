import { createContext } from "react";

export const QuizContext = createContext() // exporta a função
//alem disso precisamos de um provider que é quem vai prover o contexto na minha aplicação

export const QuizProvider = ({children}) =>{
    const value = {name: "Quiz"};
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};

