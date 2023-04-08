import { useState } from "react"

const Section = ({title, description, isVisible, setIsVisable}) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-lg">{title}</h3>
            {
                !isVisible ?
                <button 
                    onClick={() => setIsVisable(true)}
                    className="cursor-pointer underline">
                    Show
                </button> :
                <div>
                    <button 
                        onClick={() => setIsVisable(false)}
                        className="cursor-pointer underline">
                        Hide
                    </button>
                    <p>{description}</p>
                </div>
            }
            
        </div>
    )
}

const InstaDelivery = () => {
    const [visableSection , setVisableSection] = useState([]);
    return(
        <>
        <div className="p-3 m-3">
            <h1 className="font-bold text-xl">Welcome to Food Villa InstaDelivery</h1>
            <h3 className="text-lg">You want it, We deliver it 😄</h3>
        </div>
        <div>
            <Section
                title={"About InstaDelivery"}
                description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
                isVisible={visableSection == "about"}
                setIsVisable={() =>
                    setVisableSection("about")
                }
            />
            <Section
                title={"Team InstaDellivery"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
                isVisible={visableSection == "team"}
                setIsVisable={() =>
                    setVisableSection("team")
                }
            />
            <Section
                title={"Careers"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={visableSection == "career"}
                setIsVisable={() =>
                    setVisableSection("career")
                }
            />
        </div>
        </>
    )
}

export default InstaDelivery;