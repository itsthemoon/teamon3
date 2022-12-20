import StartupOppCardCSS from "./opportunitiesStyles/StartupOppCard.module.css";


const StartupOppCard = () => {
    return (
        <div className={StartupOppCardCSS.outerDiv}>
            {/* Header */}
            <div className={StartupOppCardCSS.header}>
            <p>Brown Uni * Tech * Stage 3</p>
            </div>

            <div className={StartupOppCardCSS.container}>
            {/* Description */}
            <div className={StartupOppCardCSS.description}>
            <h1>CTO</h1>
            <h2>Figma</h2>
            <h3>10 hr/w</h3>
            </div>
            
            {/* Logo */}
            <div className={StartupOppCardCSS.logo}>
                <p>Logo</p>
            </div>

            </div>
        </div>
    )
}

export default StartupOppCard;