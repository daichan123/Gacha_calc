import React, {useState} from 'react';
import Head from './components/Head'
import Foot from './components/Foot'
import TrialBox from './components/TrialBox'
import ProbabilityBox from './components/ProbabilityBox'
import ProbabilityTable from './components/ProbabilityTable'

const App: React.FC = () => {
    const [trialNum, setTrialNum] = useState<number>(10)
    const [probabilityNum, setProbabilityNum] = useState<number>(3)

	// 1回以上当たる確率の計算
    const calc = ():number => {
		if(trialNum === 0) return 0; // 試行回数が0回の時は問答無用で0％
		const p: number = probabilityNum / 100
		const not_a: number = 1 - p
		let p_n_x: number = 1 - p
		for(let i:number = 1; i < trialNum - 0; i++){
            p_n_x *= not_a
        }

		const A:number = Math.round((1 - p_n_x) * 100 * Math.pow(10, 2)) / Math.pow(10, 2)

		if(probabilityNum < 100 && A === 100) return 99.99
		else return A
	}

	return (
		<>
			<Head title="ガチャの確率計算機" />

			<section className="my-24 text-center">
				<p className="mb-24 text-2xl tracking-wider">
					排出率{probabilityNum}%のガチャを{trialNum}回行った場合、
					<br />
					1回以上当たる確率は<span className="font-bold">{calc()}%</span>
					<br />
					<br />
					(少数点第2位以下、四捨五入)
				</p>

				<div className="flex">
					<div className="w-1/2">
						<TrialBox trialNum={trialNum} setTrialNum={setTrialNum} />
						<ProbabilityBox probabilityNum={probabilityNum} setProbabilityNum={setProbabilityNum} />
					</div>
					<ProbabilityTable  trialNum={trialNum} probabilityNum={probabilityNum} />
				</div>
			</section>

			<Foot />
		</>
	);
}

export default App;
