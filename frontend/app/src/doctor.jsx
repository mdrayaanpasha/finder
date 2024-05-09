import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Doctor() {
    const [docVal, setDocVal] = useState(""); 

    useEffect(() => {
        const docSearch = new URLSearchParams(window.location.search);
        const docValue = docSearch.get("Doc");
        setDocVal(docValue); 
    }, []); 

    return (
        <p>Yello {docVal}</p>
    );
}

export default Doctor;
