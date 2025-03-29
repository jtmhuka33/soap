
export interface StudySessionType {
    id: number;
    data: string;
    scripture: string;
    observation: string;
    application: string;
}

export interface StudySessionContextType {
    studySessions: StudySessions
    addSession: (session: StudySessionType) => void
    removeSession: (id: number) => void
    updateSession: (session: StudySessionType) => void
}

export type StudySessions = StudySessionType[];
