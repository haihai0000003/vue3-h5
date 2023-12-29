import { defineStore } from "pinia"
import { ref } from "vue"
import { getToken } from "@/utils/auth"


export const useUserStore = defineStore('user',() => {
    const token = ref(getToken() || "")
    const name = ref('')
    const nickName = ref('')
    const userId = ref('')
    const avatar = ref('')
    const roles = ref([])
})