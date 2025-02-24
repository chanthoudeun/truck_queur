import { ILoginRep } from '@/libraries/model/auth/iLoginRep';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as ILoginRep | null,
    }),
    actions: {
        setUser(userData: ILoginRep) {
            this.user = userData;
        },
        logout() {
            this.user = null;
        }
    }
});
