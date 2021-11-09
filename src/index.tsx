import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, Button, WidgetWrapper, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import './styles.scss';


interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const Hotel_OccupancyWidget: React.FunctionComponent<IWidgetProps> = (props) => { 

    let [selected, setSelected] = React.useState<string | null>("op-1");

     let [regions, setRegions] = React.useState<any[]>([])
     let [isAddingRegion, setIsAddingRegion] = React.useState<boolean>(false)
 
     let regionCoords = React.useRef<any[]>([]) 

    const addRegion = () => {
        setIsAddingRegion(true);
    } 

    const GridData = [
        { 
            title: <h3 className="green">46</h3>,
            subTitle: "more than 10% vacancy"
        },
        {  
            title: <h3 className="orange">42</h3>,
            subTitle: "less than 10% vacancy"
        },
        { 
            title: <h3 className="red">15</h3>,
            subTitle: "fully occupied"
        },
        { 
            title: <h3 className="pink">05</h3>,
            subTitle: "Under Maintenance"
        }  
    ]  

    const renderGridItem = (item: any, key: number) => {
        return (<ItemCard
            item={item}
            imageField="icon"
            titleField="title"
            subTitleField="subTitle"
            nameField="name"
        />)
    }
 

const [isActive, setActive] = React.useState(false);  

const toggleClass = () => {
  setActive(!isActive); 
}; 
 
let className = "energy_content"
 
if (isActive) { 
   className += ' energy_content_toggle';
} 
   
 

    return (
        <WidgetWrapper className="hotel_occupancy"> 

            <div className="transport_map">

                <div className="transport_map-sec" style={{ width: "100%", height: "100%" }}>  
 

                <MapComponent  

                    mapUrl="" 

                    staticImage={{url:'https://static.iviva.com/images/uxp-generic-widgets/map.png', width:2880,height:1724}}

                    onMarkerClick={(el, data) => {  
                        console.log(el)
                        console.log(data)
                    }}

                    onClick ={(e)=> {
                        console.log("Hi", e)
                    }} 

                    center={{ position: { latitude: 862, longitude: 1020 }, renderMarker: false }}
                    zoom={-1}
                    maxZoom={10}
                    minZoom ={-10}
                    regions={regions}  
                    zoomOnScroll ={true}

                    markers={[   
                        
                        {
                            latitude: 942.6999969482422,
                            longitude: 1424,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "hotel green-hotel",
                                html : "<div class='hotel-icon'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="hotel-energy_content hotel-green-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>50%</h5>
                                        <p>Occupancy</p>  
                                    </div>  
                                </div> 
                            } 
                        }, 
 
                        
                        {
                            latitude: 1206.6999969482422,
                            longitude: 1078,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "hotel green-hotel",
                                html : "<div class='hotel-icon'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="hotel-energy_content hotel-green-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>10%</h5>
                                        <p>Occupancy</p>  
                                    </div>  
                                </div> 
                            } 
                        }, 
                        
                        {
                            latitude: 1012.6999969482422,
                            longitude: 584,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "hotel dark-red-hotel",
                                html : "<div class='hotel-icon'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="hotel-energy_content hotel-dark-red-energy_content">  
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>27%</h5>
                                        <p>Occupancy</p>  
                                    </div>  
                                </div> 
                            } 
                        } , 
 


                        {
                            latitude: 714.6999969482422,
                            longitude: 1038,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "hotel dark-red-hotel",
                                html : "<div class='hotel-icon'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="hotel-energy_content hotel-dark-red-energy_content"> 
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>48%</h5>
                                        <p>Occupancy</p>  
                                    </div>  
                                </div> 
                            } 
                        } , 

                        {
                            latitude: 1140.6999969482422,
                            longitude: 870,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "hotel orange-hotel",
                                html : "<div class='hotel-icon'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="hotel-energy_content hotel-orange-energy_content"> 
                                    <div className="days">7 days</div>
                                    <div className="section-content">
                                        <div className="icon"></div>
                                        <h5>36%</h5>
                                        <p>Occupancy</p>  
                                    </div>  
                                </div> 
                            } 
                        } ,

 

                        {
                            latitude: 582.6999969482422,
                            longitude: 1222,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "hotel grey-hotel",
                                html : "<div class='hotel-icon'></div>",
                                iconSize : [35, 35]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="hotel-energy_content hotel-grey-energy_content">   
                                    {/* <div className="days">7 days</div> */}
                                    <div className="section-content">
                                        {/* <div className="icon"><img src="/images/grey-light.png" alt=""></img></div> */}
                                        <h5>Empty</h5>
                                        {/* <p>Energy Cosumption</p>   */}
                                    </div>  
                                </div> 
                            } 
                        } 
                        
                    ]}

                   
                /> 
                    
        </div>   
             

            </div> 

           

            <div className="smart-light-box">

                <div className="smart-light-box-top">

                    <div className="smart-light-box_lft"> 
                        <h4>Hotel Booking</h4>
                    </div>
                
                    <div className="smart-light-box_rht"> 
                            <div className="uti-sel-boxes">
                                <div className="uti-sel-box">
                                    <FormField inline className="showcase-input">
                                    <Select
                                            selected={selected}
                                            options={[
                                                { label: "Madinah",  value: "op-1" },
                                                { label: "Makkah", value: "op-2" },
                                                { label: "Al Mawain", value: "op-3" } 
                                            ]}
                                            onChange={(value) => { setSelected(value) }}
                                            placeholder=" -- select --"
                                        />
                                    </FormField>
                                </div> 
                            </div> 
                        </div>
                   </div>

                <div className="smart-light-box_details" >
                    <DataGrid
                        data={GridData}
                        renderItem={renderGridItem}
                        columns={2}
                    />
                </div>


                </div>
                

        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "Hotel_Occupancy",
    widget: Hotel_OccupancyWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "Hotel_Occupancy",
    label: "Hotel_Occupancy",
    // click: () => alert("Hello"),
    component: Hotel_OccupancyWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"Hotel_Occupancy",
    component: Hotel_OccupancyWidget
});
*/