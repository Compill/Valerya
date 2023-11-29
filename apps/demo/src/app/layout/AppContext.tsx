import { createContext, ParentComponent } from "@soperio/react";
import React from "react";

type AppContext = {
  page: string,
  setPage: (page:string) => void,
}

const [ provider, useContext ] = createContext<AppContext>()

function AppContextProvider({ children }: ParentComponent)
{
  const [page, setPage] = React.useState("Collapse")

  const Provider = provider
  return <Provider value={{page, setPage}}>{children}</Provider>
}

export { AppContextProvider, useContext as useAppContext };
