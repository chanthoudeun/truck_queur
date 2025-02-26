import apis from '@/libraries/apis';
import { ILoginRep } from '@/libraries/model/auth/iLoginRep';
import { ILoginReq } from '@/libraries/model/auth/iLoginReq';
import router from '@/router';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user') || 'null') as ILoginRep | null,
    }),
    actions: {
        setUser(userData: ILoginRep) {
            this.user = userData;
            localStorage.setItem('user', JSON.stringify(userData)); // Save user data
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user'); // Remove from storage
        }
    }
});
