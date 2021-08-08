import React,{FC, Dispatch, SetStateAction} from 'react'

interface Props {
    probability: number
    setProbabilityNum: Dispatch<SetStateAction<number>>
}

const ProbabilityButton: FC<Props> = ({probability, setProbabilityNum}) => {

    const handleClick = () => {
        setProbabilityNum(probability)
    }

    return(
        <div>
            <button className="border border indigo-600 hover:bg-pink-100 m-0.5 p-1"
                onClick={handleClick}
            >
                {probability}%
            </button>
        </div>
    )
}

export default ProbabilityButton