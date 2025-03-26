import { MdMenu } from "react-icons/md";

const Settings = () => {

    const settings = [
        {
            id: 1,
            name: "theme",
            icon: <MdMenu />
        },
        {
            id: 2,
            name: "profile",
            icon: <MdMenu />
        },
        {
            id: 3,
            name: "preference",
            icon: <MdMenu />
        },
    ]

    return(
        <>
            <ul>
                {
                    settings.map(value => (
                        <li key={value.id} >
                            {value.name} <div>{value.icon}</div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Settings;