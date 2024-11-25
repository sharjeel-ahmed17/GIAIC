import { data } from "@/data/tab";
import { useState } from "react"


const Tabs = () => {
    const [activeTab , setActiveTab] = useState(0);
    const [activeContent, setActiveContent] = useState(data[0]);
    // console.log(data[0])
    const changData = (index : number) =>{
// alert(index);
setActiveTab(index);
setActiveContent(data[index])
    }
  return (
    <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-24 px-4">
            {
                data.map((item , index)=>(
            <button key={index} className={`px-4 py-2 rounded-lg ${activeTab === index? 'bg-red-600 text-white' : 'text-gray-700'}`} onClick={()=>changData(index)}>
                {item.title}
            </button>
                ))
            }
           
        </div>
        {
            activeContent !== undefined ? <p className="text-center text-3xl ">{activeContent.description}</p> : ''
        }
        
    </div>
  )
}

export default Tabs