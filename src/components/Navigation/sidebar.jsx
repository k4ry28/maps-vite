import { TfiArrowCircleRight, TfiHome, TfiMapAlt, TfiSettings, TfiInfo } from "react-icons/tfi";

export default function Sidebar() {    

    const Menu = [
        { title: 'Home', link: '/', icon: <TfiHome size={18} /> },
        { title: 'Map', link: '/map', icon: <TfiMapAlt size={18} /> },
        { title: 'Settings', link: '/settings', icon: <TfiSettings size={18} /> },
        { title: 'About', link: '/about', icon: <TfiInfo size={18} /> },
    ]
    
    return (
        <>
            <div className="flex ">
                <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" ></input>

                <label htmlFor="drawer-toggle" className="absolute top-0 left-0 inline-block p-2 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-56">                    
                    <TfiArrowCircleRight size={24} />
                </label>

                <div className="fixed top-0 left-0 z-20 w-56 h-full transition-all duration-500 transform -translate-x-full bg-slate-50 shadow-lg peer-checked:translate-x-0">
                    <div className="px-6 py-4">
                        <img src="./mymaps.png" className={`my-5 mx-auto w-32`} />
                        <h2 className="text-gray-500 text-lg font-semibold">MyMaps</h2>
                        <p className="text-gray-500 text-sm">Version 0.0.1</p>
                    </div>
                    <div className="px-6 py-4">
                        {Menu.map((item, index) => (
                            <a href={item.link} key={index} className={`w-full flex flex-row items-center py-2 px-3 my-2 transition-all duration-200 text-indigo-600 font-medium hover:bg-indigo-800 hover:text-slate-100 rounded-full`}> 
                                {item.icon}
                                <span className="ml-2 text-lg">{item.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}

