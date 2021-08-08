import React,{FC, Dispatch, SetStateAction} from 'react'
import ProbabilityButton from './ProbabilityButton'

interface Props {
    probabilityNum: number
    setProbabilityNum: Dispatch<SetStateAction<number>>
}

const ProbabilityBox: FC<Props> = ({probabilityNum, setProbabilityNum}) => {
    const num:number[] = [0.1, 0.5, 1, 3, 5, 7, 10]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 先頭の0は削除
        for(;;){
            if(e.target.value.slice(0, 1) === "0" && e.target.value.slice(1, 2) !== ".") {
                e.target.value = e.target.value.slice(1);
                break
            }else{
                break
            }
        }
        let inputValue:number = Number(e.target.value)

        if(inputValue > 100) inputValue = 100
        if(isNaN(inputValue)) inputValue = 0
        setProbabilityNum(inputValue)
    }

    return(
        <div className="text-center">
            排出率<br></br>
            <input type="number"
                className="border border indigo-600 mb-3"
                value={probabilityNum}
                maxLength={5}
                min={0}
                max={100}
                onChange={handleChange} />

            <div className="flex flex-wrap justify-center w-4/5 mx-auto">
                {num.map((value) =>
                    <ProbabilityButton key={value} probability={value} setProbabilityNum={setProbabilityNum} />
                )}
            </div>
        </div>
    )
}

export default ProbabilityBox