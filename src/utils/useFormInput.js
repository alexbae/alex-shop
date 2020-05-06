import { useState } from 'react'

const useFormInput = init => {
    const [val, setVal] = useState(init)

    const handleChange = e => {
        setVal(e.target.value)
    }

    return {
        val, 
        onChange: handleChange
    }
}

export default useFormInput
