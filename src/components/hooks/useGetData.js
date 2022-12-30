import { useState } from "react";

const useGetData= (param) => {
    const [data, setData] = useState(() => {

        const OptionsRegister = {
            body: JSON.stringify({ tipo: param }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch('http://localhost:3003/read', OptionsRegister)
            .then((res) => res.json())
            .then((data) => setData(data))
    })

    return [data]
};

export default useGetData;