
const ideas = [
  {
    url: 'https://www.brainvire.com/assets/images/adv.svg',
    title: 'Advisory',
    caption: 'Charting digital roadmaps through strategic solutions'
  },
  {
    url: 'https://www.brainvire.com/assets/images/art.svg',
    title: 'Design',
    caption: 'Redefined design thinking process, crafting product of tomorrow'
  },
  {
    url: 'https://www.brainvire.com/assets/images/eng.svg',
    title: 'Engineering',
    caption: 'Industry 4.0 solution using AI/Ml, IoT, Blockchain with mobility'
  },
]
const IdeaToLife = () => {
  return (
    <div className='px-8 py-14'>
      <h1 className='text-6xl idea-bring-name'>Bringing your ideas to life</h1>
      <ul className='flex justify-around items-center'>
        {ideas.map((idea, index) => (
          <li key={index} className='idea-to-life-num flex flex-col text-center'>
            <img src={idea.url} alt="SVG Image" />
            <h2 className='text-3xl idea-title'>{idea.title}</h2>
            <span className='text-xl'>{idea.caption}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IdeaToLife;