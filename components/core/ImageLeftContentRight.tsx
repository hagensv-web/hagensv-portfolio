interface Props {
    imageSrc: string,
    imageCredit?: React.ReactNode
    children: React.ReactNode
}

export default function ImageLeftContentRight({ imageSrc, imageCredit, children }: Props){
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="order-2 md:order-1 text-xs">
          <img src={imageSrc} className="rounded"/>
          { imageCredit }
        </div>
        <div className="order-1 md:order-2">
          {children}
        </div>
      </div>
    )
}