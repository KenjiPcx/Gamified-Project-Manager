import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCode, faCog, faDumbbell, faTrophy } from "@fortawesome/free-solid-svg-icons"

interface ShortcutObj {
    name: string;
    icon: JSX.Element;
}

const ShortcutData: ShortcutObj[] = [
    {
        name: "CStats",
        icon: <FontAwesomeIcon icon={faCode} />
    },
    {
        name: "FStats",
        icon: <FontAwesomeIcon icon={faDumbbell} />
    },
    {
        name: "Trophies",
        icon: <FontAwesomeIcon icon={faTrophy} />
    },
    {
        name: "Logs",
        icon: <FontAwesomeIcon icon={faBook} />
    },
    {
        name: "Settings",
        icon: <FontAwesomeIcon icon={faCog} />
    }
]

export default ShortcutData;