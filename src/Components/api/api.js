import axios from "axios";


export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do"

const fetchTopAlbum = async () => {
    try {
        const res  = await axios(`${BACKEND_ENPOINT}/albums/top`);
        return res.data
    } catch (error) {
        return null;
    }
}

export {fetchTopAlbum};