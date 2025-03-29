import {createContext, ReactNode, useContext, useState} from "react";
import {StudySessionContextType, StudySessions, StudySessionType} from "@/components/Types/StudyTypes";

const StudySessionContext = createContext<StudySessionContextType | undefined>(undefined);

interface ProviderProps {
    children: ReactNode;
}

export const StudySessionContextProvider = ({children}: ProviderProps) => {
    const [studySessions, setStudySessions] = useState<StudySessions>([]);
    const addSession = (session: StudySessionType) => {
        setStudySessions([...studySessions, session]);
    }
    const removeSession = (id: number) => {
        setStudySessions((prevSessions) => prevSessions.filter((session) => id !== id));
    }
    const updateSession = (studySession: StudySessionType) => {
        setStudySessions((prevSessions) =>
            prevSessions.map((session) =>
                session.id === studySession.id ? studySession : session
            ))
    }

    return (
        <StudySessionContext.Provider value={{ studySessions, addSession, removeSession, updateSession}}>
            {children}
        </StudySessionContext.Provider>
    )
}

export const useStudySessions = ():StudySessionContextType => {
    const context = useContext(StudySessionContext);
    if(context === undefined) {
        throw new Error('useStudySessions must be used within the context');
    }
    return context;
}