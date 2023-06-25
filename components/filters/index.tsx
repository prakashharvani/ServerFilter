

const Filters = ({ props }: any) => {

    const commonFilter = (type:any,value:any ) => {
        props?.setStateChange(true)

        if(type == "location"){

            console.log('---------------location change 2',props.searchObj) 
            props?.setSearchObj({
                ...props.searchObj,
                location:value
            })
        }
        else if(type == "ram") {

            var a1 =  props.searchObj.ram
            
            if(a1.includes(value)){
                 a1.filter((x:any)=>(x !== value));
            }else{
                a1.push(value)
            }

            props?.setSearchObj({
                ...props.searchObj,
                ram:a1
            })

        } else if(type == "harddisk") {
            props?.setSearchObj({
                ...props.searchObj,
                harddisk:value
            })
        }
        else if(type == "storage") {
            props?.setSearchObj({
                ...props.searchObj,
                storage:value
            })
        }
        
        
    }


    return (
        <>

        {/* --------------------------------RAM ----------------- */}
            <div className="container d-flex">
                {/* <div className="row "> */}


                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="2GBDDR" onChange={(e) => {
                            commonFilter("ram",e.target.value)

                     }}  id="flexCheckChecked" />
                    <label className="form-check-label" >
                        2 GBHDD
                    </label>
                </div>
                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="4GBDDR" onChange={(e) => {

                       
                            commonFilter("ram",e.target.value)
                       

                     }}  id="flexCheckChecked" />
                    <label className="form-check-label" >
                        4 GBHDD
                    </label>
                </div>
                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox"  value="8GBDDR" onChange={(e) => {

                            commonFilter("ram",e.target.value)
                     }}  id="flexCheckChecked" />
                    <label className="form-check-label" >
                        8 GBHDD
                    </label>
                </div>
                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="12GBDDR" onChange={(e) => {

                            commonFilter("ram",e.target.value)
                      

                     }}  id="flexCheckChecked" />
                    <label className="form-check-label" >
                        12 GBHDD
                    </label>
                </div>

                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="16GBDDR" onChange={(e) => {

                            commonFilter("ram",e.target.value)
                   

                     }}  id="flexCheckChecked" />
                    <label className="form-check-label" >
                        16 GBHDD
                    </label>
                </div>
                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="24GBDDR" onChange={(e) => {

                            commonFilter("ram",e.target.value)
                       

                     }}  id="flexCheckChecked" />
                    <label className="form-check-label" >
                        24 GBHDD
                    </label>
                </div>
                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="32GBDDR" onChange={(e) => {

                            commonFilter("ram",e.target.value)
                        

                     }}  id="flexCheckChecked" />
                    <label className="form-check-label" >
                        32 GBHDD
                    </label>
                </div>
                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="48GBDDR" onChange={(e) => {

                            commonFilter("ram",e.target.value)
                     }}  id="flexCheckChecked" />
                    <label className="form-check-label" >
                        48 GBHDD
                    </label>
                </div>
                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="64GBDDR" onChange={(e) => {

                            commonFilter("ram",e.target.value)

                     }} id="flexCheckChecked" />
                    <label className="form-check-label" >
                        64 GBHDD
                    </label>
                </div>
                <div className="form-check m-2">
                    <input className="form-check-input" type="checkbox" value="96GBDDR" onChange={(e) => {

                        
                            commonFilter("ram",e.target.value)
                     
                     

                     }} id="flexCheckChecked" />
                    <label className="form-check-label" >
                        96 GBHDD
                    </label>
                </div>

                {/* </div> */}
            </div>
            
            <div className="container">
            <div className="row">

                        {/* --------------------------------Harddisk  ----------------- */}

                <select className="form-select form-select-lg mb-3 ml-2" aria-label=".form-select-lg example" defaultValue=""  onChange={(e) => { 

commonFilter('harddisk',e.target.value)

                }}>
                    <option value="">Select harddisk type</option>
                    <option value="SATA">SATA</option>
                    <option value="SAS">SAS</option>
                    <option value="SSD">SSD</option>
                </select>

                        {/* --------------------------------Location  ----------------- */}

                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue=""  onChange={(e) => {
                    console.log('---------------location change',e.target.value) 
commonFilter('location',e.target.value)
                }}  >
                    <option  value="">Location</option>
                    <option value="Washington D.C.WDC-01">Washington D.C.WDC-01</option>
                    <option value="San FranciscoSFO-12">San FranciscoSFO-12</option>
                    <option value="DallasDAL-10">DallasDAL-10</option>
                    <option value="SingaporeSIN-11">SingaporeSIN-11</option>
                    <option value="FrankfurtFRA-10">FrankfurtFRA-10</option>
                    <option value="AmsterdamAMS-01">AmsterdamAMS-01</option>
                </select>
                </div>
            </div>
          
        </>
    )
}

export default Filters;