import Image from 'next/image'

export default function Home() {
	return (
		<main>
			<div className="flex min-h-screen flex-col items-center justify-center">
				<h1 className={"text-2xl text-center "}>Welcome 2</h1>
				<h1 className="font-bold text-pink-700 text-5xl my-3">
					BEGOINGTO
					<i className="bi bi-badge-8k ms-2"></i>
				</h1>
				<h1 className={"text-2xl text-center "}>1<sup>st</sup> Scholarship of Full Stack Web Development</h1>
				<h1 className={"text-2xl text-center "}>at</h1>
				<h1 className="font-bold text-blue-700 text-4xl my-3">
					ISTAD
					<i className="bi bi-mortarboard"></i>
				</h1>
			</div>
		</main>
	)
}
