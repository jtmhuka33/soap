import {StudySessions} from "@/components/Types/StudyTypes";
import {AsyncStorage} from "expo-sqlite/kv-store";


export const storeStudySessions = async (sessions:StudySessions[]) => {
    try {
        const data = JSON.stringify(sessions);
        await AsyncStorage.setItem("sessions", data);
    } catch (error) {
        console.error("Error storing study session: ",error);
    }
}

export const getStudySessions = async () => {
    try {
        const data:string | null = await AsyncStorage.getItem("sessions");
        if (!data) return null;
        return JSON.parse(data);
    } catch (error) {
        console.error("Error retrieving study sessions: ",error);
    }
}