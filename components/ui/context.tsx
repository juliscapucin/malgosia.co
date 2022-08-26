import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface UIContextValue {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const initialState: UIContextValue = {
  isSidebarOpen: false,
  setIsSidebarOpen: () => new Error("Implement isSidebarOpen"),
};

const UIContext = createContext<UIContextValue>(initialState);

const UIProvider: FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    initialState.isSidebarOpen
  );

  const value = useMemo(() => {
    return {
      isSidebarOpen,
      setIsSidebarOpen,
    };
  }, [isSidebarOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUIContext can only be used in UIProvider");
  }

  return context;
};

export { UIContext, UIProvider };
