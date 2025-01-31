import BirthrightInfo from "@/types/BirthrightInfo";
import characterInfo from "./characterInfo";

const defaultBirthrightInfo: BirthrightInfo = {
    name: 'Isaac', 
    subtitle: characterInfo["Isaac"].birthright.subtitle, 
    description: characterInfo["Isaac"].birthright.description,
    image: characterInfo["Isaac"].imagePath
}

export default defaultBirthrightInfo;