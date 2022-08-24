import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";

interface Props {
  children: ReactNode;
}

const UIContext = createContext<{ [key: string]: any }>({
  uiState: "defaultState",
});

const UIProvider: FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const uiState = useMemo(() => {
    return {
      isSidebarOpen,
      setIsSidebarOpen,
    };
  }, [isSidebarOpen]);

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  return context;
};

export { UIContext, UIProvider };
