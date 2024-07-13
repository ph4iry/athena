// import classNames from "classnames";
import { ReactNode } from "react";

interface Card {
  cardType: 'bordered' | 'tinted' | 'photo';
  className?: string;
  children?: ReactNode;
}

interface PhotoCardProps extends Card {
  cardType: 'photo';
  children: ReactNode;
  photoLocation: 'left' | 'right' | 'top';
  image: string;
}

interface BorderedCardProps extends Card {
  cardType: 'bordered';
  children: ReactNode;
  borderColor?: string;
}

interface TintedCardProps extends Card {
  tintColor: string;
  cardType: 'tinted';
  image: string;
  href: string;
  title: string;
  description: string;
}

type CardProps = BorderedCardProps | TintedCardProps | PhotoCardProps;

export default function Card(props: CardProps) {
  return (
    <>
      {props.cardType === 'tinted' && 
        <TintedCard cardType="tinted" tintColor={props.tintColor} image={props.image} href={props.href} title={props.title} description={props.description} className={props.className} />
      }
      {props.cardType === 'bordered' &&
        <BorderedCard cardType='bordered' className={props.className}>{props.children}</BorderedCard>
      }
      {props.cardType === 'photo' && 
        <PhotoCard cardType='photo' photoLocation={props.photoLocation} image={props.image} className={props.className}>{props.children}</PhotoCard>
      }
    </>
  )
}

function TintedCard(props: TintedCardProps) {
  return (
    <div className="p-4 relative overflow-hidden shadow-md max-w-[30vw] min-h-[20vh] rounded-lg bg-no-repeat bg-cover bg-center" style={{
      backgroundImage: `url(${props.image})`
    }}>
      <div className="absolute w-full h-full top-0 left-0 z-0 opacity-50 mix-blend-multiply" style={{
        backgroundColor: props.tintColor
      }}></div>
      <div className="div absolute bottom-4 left-0 z-10 pl-4 text-white">
        <div className="text-2xl font-bold">{props.title}</div>
        <div className="text-base">{props.description}</div>
      </div>
    </div>
  )
}

function BorderedCard(props: BorderedCardProps) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border-2" style={{
      borderColor: props.borderColor || 'black',
    }}>
      {props.children}
    </div>
  )
}

function PhotoCard(props: PhotoCardProps) {
  const getFlexDirectionFromPhotoProps = () => {
    switch (props.photoLocation) {
      case "left": return 'flex-row'
      case "right": return 'flex-row-reverse'
      case "top": return 'flex-col'
    }
  }

  const getPhotoStylesFromPhotoProps = () => {
    switch (props.photoLocation) {
      case "left": return 'rounded-l-lg max-w-[50%] w-full'
      case "right": return 'rounded-r-lg max-w-[50%] w-full'
      case "top": return 'rounded-t-lg w-full h-1/2'
    }
  }

  console.log(props.className)

  return (
    <div className={`flex rounded-lg shadow-md ${getFlexDirectionFromPhotoProps()} w-full min-h-[30vh] ${props.className}`}>
      <div className={`${getPhotoStylesFromPhotoProps()} shrink-0 bg-cover`} style={{
        backgroundImage: `url(${props.image})`,
      }}>
      </div>
      <div className="p-4">
        {props.children}
        <div>direction: {props.photoLocation}</div>
      </div>
    </div>
  )
}