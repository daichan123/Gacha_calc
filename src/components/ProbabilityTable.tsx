import React from 'react'
// import { HTMLAttributes } from 'react'

interface Props {
    trialNum: number
    probabilityNum: number
}

const ProbabilityTable: React.FC<Props> = ({trialNum, probabilityNum}) => {
    const rows: number = 5; // 行数
    const hit: number = probabilityNum / 100
    const miss: number = 1 - hit
    let factorial_for_trialNum: bigint = 0n

    // 自乗
    const square = (x:number, n:number):number => {
        let A: number = 1
        for(let i: number = 0; i < n; ++i){
            A *=  x
        }
        return A;
    }

    // 階乗
    const factorial = (x:bigint):bigint => {
        if(x === 0n || x === 1n) return 1n;

        let A: bigint = 1n
        for(let i: bigint = 1n; i <= x; ++i){
            A *=  i
       }

        return A;
    }

    // nCr
    const calc_nCr = (n:number, r:number):number => {
        const A:bigint = factorial_for_trialNum / (factorial(BigInt(r)) * factorial(BigInt(n - r)))
        return Math.round(Number(A) * Math.pow(10, 2)) / Math.pow(10, 2)
    }

    // メインの計算
    const calc = (r:number):number => {
        if(trialNum < r) return 0; // 試行回数の方が少なくなることはない

        let allMiss: number = square(miss, trialNum)

        let nCr: number = calc_nCr(trialNum, r)
        let hit_: number = square(hit, r)
        let miss_: number = square(miss, trialNum - r)

        let ans: number = 0

        if(r === 0) ans = allMiss
        else ans = nCr * hit_ * miss_

        return Math.round(ans * 100 * Math.pow(10, 2)) / Math.pow(10, 2)
    }

    const make_tr = (num: number) => {
        return (
            <tr>
                <td>{num}回</td>
                <td>{calc(num)}%</td>
            </tr>
        )
    }

    factorial_for_trialNum = factorial(BigInt(trialNum))

    return(
        <div className="w-1/2">
            <table className="w-3/4 m-auto">
                <thead>
                    <tr>
                        <th>当たる回数</th>
                        <th>確率</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(rows).keys()].map(index => make_tr(index))}
                </tbody>
            </table>
        </div>
    )
}

export default ProbabilityTable