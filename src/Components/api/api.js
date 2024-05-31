import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

const fetchTopAlbum = async () => {
    try {
        const res = await axios(`${BACKEND_ENDPOINT}/albums/top`);
        console.log("API Response:", res.data);
        return res.data;
    } catch (error) {
        console.error("API Error:", error); 
        return null;
    }
}

export { fetchTopAlbum };
