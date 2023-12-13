import React, {useState} from "react";

const Tabs = ({tabdata}) => {
    console.log(tabdata)

    const [myTab, setMyTab] = useState(tabdata[0].content);

    function showContent() {

    }

    return (
        <div>
            <ul>
            {
                tabdata.map((item)=>
                    <li onClick={()=>setMyTab(item.content)}>{item.title}</li>  
                )
            }
            </ul>
            <div>
                <p>{myTab}</p>
            </div>
        </div>
    )
}

export default Tabs;