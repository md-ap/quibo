import { Category } from '../types'
import { Button } from './Button'
import { Label } from './Label'

interface CategoriesCardProps {
  category: Category
}

export function CategoriesCard({ category }: CategoriesCardProps) {
  return (
    <div className="bg-quibo-gray-light p-[1.85rem] text-left rounded-[1.27rem] pt-[1.62rem] px-[1.85rem] pb-[3.22rem] flex flex-col items-start h-full">
        <Label className='mb-[3rem]'>{category.label}</Label>
      <h3 className="text-quibo-text text-quibo-lg font-medium mb-[2.3rem] leading-[1.1]">
        {category.title}
      </h3>
      <hr className="border-quibo-green-light border-t-2 pb-[1.4rem] mb-0 w-full" />
      <h4 className="text-quibo-text font-medium text-quibo-md mb-[2.03rem] lg:pr-[5.57rem] leading-[.9]">
        {category.subtitle}
      </h4>
      <p className="text-quibo-text leading-[1.1] text-quibo-xs mb-[3.5rem] lg:pr-[5rem] flex-grow">
        {category.description}
      </p>
      <Button
        text={category.cta.text}
        href={category.cta.href}
        variant="secondary"
        className="w-[18rem] mt-auto"
      />
    </div>
  )
}
