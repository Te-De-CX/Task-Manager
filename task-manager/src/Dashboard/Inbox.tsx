
const Inbox: React.FC = () => {

    const inboxes = [
        {
            id: 1,
            name: "the name is the same and the things i dont like is the same",
            time: "09.50"
        },
        {
            id: 2,
            name: "the name is the same and the things i dont like is the same",
            time: "09.50"
        },
        {
            id: 3,
            name: "the name is the same and the things i dont like is the same",
            time: "09.50"
        },
        {
            id: 4,
            name: "the name is the same and the things i dont like is the same",
            time: "09.50"
        },
        {
            id: 5,
            name: "the name is the same and the things i dont like is the same",
            time: "09.50"
        },
        {
            id: 6,
            name: "the name is the same and the things i dont like is the same",
            time: "09.50"
        },
    ]

    return (
        <>
            <ul>
                {
                    inboxes.map(value => (
                        <li key={value.id} >
                            {
                                value.name
                            }
                            <span>
                                {
                                    value.time
                                }
                            </span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Inbox;