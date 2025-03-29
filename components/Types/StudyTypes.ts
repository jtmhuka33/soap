
export interface StudySessionType {
    id: number;
    data: string;
    scripture: string;
    observation: string;
    application: string;
}

export interface StudySessionContextType {
    sessions: StudySessions
    addSessions: (session: StudySessionType) => void
    removeSessions: (session: StudySessionType) => void
    updateSessions: (session: StudySessionType) => void
}

export type StudySessions = StudySessionType[];
