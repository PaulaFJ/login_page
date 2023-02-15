import chair from './assets/chair.png'
import Content from './components/Content'

function App() {

  return (
    <div className="w-screen h-screen p-8 flex">
      <div className="flex-1 hidden md:block">
        <img src={chair} alt="Dumby" className="h-full"/>
        <p className="absolute bottom-0 pb-12 pl-8 text-white text-4xl font-bold">
          Lorem Ipsum is simply
          <span className="text-2xl pt-2 block font-normal">Lorem Ipsum is simply </span>
        </p>
      </div>

      <Content />
    </div>
  )
}

export default App
