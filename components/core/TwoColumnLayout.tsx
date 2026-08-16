interface TwoColumnLayoutProps {
    leftContent: React.ReactNode
    rightContent: React.ReactNode
    mobileFirst: "left" | "right"
}

export default function TwoColumnLayout( { leftContent, rightContent, mobileFirst }: TwoColumnLayoutProps ){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className={`${mobileFirst === "left" ? 'order-1' : 'order-2' } md:order-1`}>
            { leftContent }
            </div>
            <div className={`${mobileFirst === "right" ? 'order-1' : 'order-2' } md:order-2`}>
            { rightContent }
            </div>
        </div>
    )
}