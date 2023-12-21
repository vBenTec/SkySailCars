export default {
    getAllUrl: `${import.meta.env.API_URL}/cars`,
    getOneUrl: (id: string) => `${import.meta.env.API_URL}/cars/${id}`,
    getPopularUrl: `${import.meta.env.API_URL}/cars/popular`,
}