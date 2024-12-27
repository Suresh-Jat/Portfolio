import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map(({ id, title, className, img, imgClassName, spareImg, description, titleClassName }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        spareImg={spareImg}
                        titleClassName={titleClassName}
                    />
                ))}

            </BentoGrid>
        </section>
    )
}

export default Grid
