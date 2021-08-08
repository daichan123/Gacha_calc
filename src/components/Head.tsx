import React from 'react';

type Props = {
	title: string
}

const Head: React.FC<Props> = (props) => {
    return(
        <header className="py-12 text-4xl bg-pink-800 text-green-50 tracking-wider">
            <h1 className="text-center text-white">{props.title}</h1>
        </header>
    )
}

export default Head