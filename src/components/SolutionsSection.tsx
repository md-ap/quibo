import { Solutions } from '../types'
import { CategoriesCard } from './CategoriesCard'
import { SectorCard } from './SectorCard'
import { resolveAssetPath } from '../utils'
import { FadeIn } from './FadeIn'

interface SolutionsSectionProps {
  solutions: Solutions
}

export function SolutionsSection({ solutions }: SolutionsSectionProps) {
  return (
    <section id="soluciones" className="pt-[4.37rem] pb-[2.7rem] xl:pt-[2.54rem] xl:pb-[2.09rem]">
      <div className="flex flex-col items-center max-w-[90%] lg:max-w-[87%] mx-auto">
        <h2 className="text-quibo-text text-quibo-md font-medium leading-[1.1] mb-[1.85rem] text-center">
          {solutions.title1}
        </h2>
        <img src={resolveAssetPath("/svg/arrow-d.svg")} alt="Solutions" className="w-[2.5rem] h-auto mb-[.88rem]" />

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[0.67rem] mb-[3.7rem] items-stretch">
          {solutions.categories.map((category, index) => (
            <FadeIn key={index}>
              <CategoriesCard category={category} />
            </FadeIn>
          ))}
        </div>

        <h2 className="text-quibo-text text-quibo-md font-medium leading-[1.1] mb-[2.2rem] text-center">
          {solutions.title2}
        </h2>

        {/* Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[0.67rem]">
          {solutions.sectors.map((sector, index) => (
            <FadeIn key={index} staggered={index}>
              <SectorCard sector={sector} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
