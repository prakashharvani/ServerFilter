import Filters from "@/components/filters";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Server from "@/components/server";

import data from "@/db.json";
import { useEffect, useState } from "react";

const Servers = () => {

    const [serverData, setServerData] = useState(data || [])
    const [stateChange, setStateChange] = useState(false)

    const [searchObj, setSearchObj]: any = useState({
        harddisk: '',
        location: '',
        ram: [],
        storage: ''
    })

    useEffect(() => {

    }, [serverData])
    //----------------- Logic For Search
    useEffect(() => {

        if (stateChange) {
            console.log('---------------location change 3', searchObj)

             let fullData =  data.filter((x) => {

                
                if (searchObj.location !== ''  && x.Location === searchObj.location) {
                    console.log('---------------location change 3 condition match', )

                    return x;
                }
            
                if(searchObj.ram.length){
                  
                    if (searchObj.ram.includes(x.RAM.slice(0, -1))) {
                        return x;
                    }
                }

                if (searchObj.harddisk !== '' && x.HDD.includes(searchObj.harddisk)) {
                    return x;
                }

                if(searchObj.location === '' && searchObj.harddisk == '' && searchObj.ram.length == 0){
                        return x;
                }

            })
            console.log('---------------lfullData', fullData)

            setServerData(fullData);

        }

    }, [searchObj,stateChange])


    return (
        <>
            <Header />
            <Filters props={{ serverData, setServerData, searchObj, setSearchObj, stateChange, setStateChange }} />

            <div className="container">
                <div className="row">
                    {serverData.map((card: any, index: any) => (
                        <Server props={{ card, index }} key={index} />
                    ))}
                </div>
            </div>

            <Footer />
        </>

    )
}
export default Servers;
