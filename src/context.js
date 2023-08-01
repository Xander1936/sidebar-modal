import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // openSidebar() Function
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    // closeSidebar() Function
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    // openModal() Function
    const openModal = () => {
        setIsModalOpen(true);
    }
    
    // closeModal() Function
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            openSidebar,
            closeModal,
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

// Custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }

// <></>