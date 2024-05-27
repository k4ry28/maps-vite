import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useState, useContext } from "react";
import { MapStyleContext } from "@/contexts/mapStyleContext";

export const MapConfigurations = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className="absolute bottom-3 left-3 z-50">
            <button className="text-black bg-slate-100 hover:text-white border border-slate-500 hover:bg-black focus:outline-none focus:ring-gray-300 font-medium text-center rounded-lg p-1.5" onClick={handleClick}>
                <MdOutlineMiscellaneousServices size={18} />
            </button>
            <Menu open={open} />
        </div>
    )
}

const Menu = ({ open }) => {
    const { handleStyleChange } = useContext(MapStyleContext);
    const [selected, setSelected] = useState('basic');

    const selectedStyle = "border-2 border-orange-500 rounded-lg";
    const unselectedStyle = "border-2 border-slate-400 rounded-lg";
    const radioClassName = "absolute w-11 h-11 mx-0.5 opacity-0";

    const handleChange = (event) => {
        setSelected(event.target.value);
        handleStyleChange(event.target.value);
    }

    return (
        <div className={`absolute bottom-9 border-2 border-slate-400 bg-slate-50 text-slate-950 p-2 w-60 rounded-lg ${open ? 'block' : 'hidden'}`}>
            <div className="flex flex-row gap-2 items-center">                
                <div className={selected === 'basic' ? selectedStyle : unselectedStyle}>
                    <input type="radio" id="basic" name="map-style" defaultChecked value="basic" className={radioClassName} onChange={handleChange} /> 
                    <img 
                        src="./map/styles/basic.png" 
                        className='w-12 rounded-md'
                    />
                </div>
                <div className={selected === 'dark' ? selectedStyle : unselectedStyle}>
                    <input type="radio" id="dark" name="map-style" value="dark" className={radioClassName} onChange={handleChange} />
                    <img 
                        src="./map/styles/dark.png" 
                        className='w-12 rounded-md'
                    />
                </div> 
                <div className={selected === 'dark-v2' ? selectedStyle : unselectedStyle}>               
                    <input type="radio" id="dark-v2" name="map-style" value="dark-v2" className={radioClassName} onChange={handleChange} />
                    <img 
                        src="./map/styles/dark-v2.png" 
                        className='w-12 rounded-md'
                    />
                </div>
                <div className={selected === 'satellite' ? selectedStyle : unselectedStyle}>
                    <input type="radio" id="satellite" name="map-style" value="satellite" className={radioClassName} onChange={handleChange} />
                    <img 
                        src="./map/styles/satellite.png" 
                        className='w-12 rounded-md'
                    />
                </div>
            </div>
        </div>
    )
}