import router from "@/router"

export const useRouter = () => {
    return router
}

export const useRoute = () => {
    return router.currentRoute
}