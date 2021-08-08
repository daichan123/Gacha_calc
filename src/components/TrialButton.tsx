import React,{FC, Dispatch, SetStateAction} from 'react'

interface Props {
    trialNum: number
    setTrialNum: Dispatch<SetStateAction<number>>
}

const TrialButton: FC<Props> = ({trialNum, setTrialNum}) => {

    const handleClick = () => {
        setTrialNum(trialNum)
    }

    return(
        <div>
            <button className="border border indigo-600 hover:bg-pink-100 m-0.5 p-1"
                onClick={handleClick}
            >
                {trialNum}回
            </button>
        </div>
    )
}

export default TrialButton