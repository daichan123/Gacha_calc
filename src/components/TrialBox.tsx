import React,{FC, Dispatch, SetStateAction} from 'react'
import TrialButton from './TrialButton'

interface Props {
    trialNum: number
    setTrialNum: Dispatch<SetStateAction<number>>
}

const TrialBox: FC<Props> = ({trialNum, setTrialNum}) => {
    const num:number[] = [10, 20, 30, 40, 50, 60 , 70, 80, 90, 100]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 先頭の0は削除
        for(;;){
            if(e.target.value.slice(0, 1) === "0") {
                e.target.value = e.target.value.slice(1);
                break
            }else{
                break
            }
        }
        let inputValue:number = parseInt(e.target.value)

        if(inputValue > 5000) inputValue = 5000
        if(isNaN(inputValue)) inputValue = 0
        setTrialNum(inputValue)
    }

    return(
        <div className="text-center mb-8">
            試行回数(~5000)<br></br>
            <input type="number"
                className="border border indigo-600 mb-3"
                value={trialNum}
                maxLength={3}
                min={0}
                max={5000}
                onChange={handleChange} />

            <div className="flex flex-wrap justify-center w-4/5 mx-auto">
                {num.map((value) =>
                    <TrialButton key={value} trialNum={value} setTrialNum={setTrialNum} />
                )}
            </div>
        </div>

)
}

export default TrialBox