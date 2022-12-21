import StartupDisplayCardCSS from "./opportunitiesStyles/StartupDisplayCard.module.css";


const StartupDisplayCard = () => {
    return (
        <div>
            {/* Header */}
            <div className={StartupDisplayCardCSS.headerDiv}>
                <h1 className={StartupDisplayCardCSS.headerTitle}>Figma</h1>
                <p className={StartupDisplayCardCSS.headerStage}>Stage 1</p>
            </div>

            {/* Content */}
            <div className={StartupDisplayCardCSS.contentContainer}>
                {/* About */}
                <div className={StartupDisplayCardCSS.aboutDiv}>
                    <h2>About</h2>
                    <p>Figma is a cloud-based design tool that is similar to Sketch in functionality and
                         features, but with big differences that make Figma better for team collaboration.
                    </p>
                </div>

                {/* Team */}
                <div className={StartupDisplayCardCSS.teamDiv}>
                    <h2>Team</h2>
                    <p>
                        Jackson Davis <br/>
                        Tanner Thomas 
                    </p>
                </div>

                {/* Role */}
                <div className={StartupDisplayCardCSS.roleDiv}>
                    <h2>Role</h2>
                    <p>
                        Amazon internships are full-time positions, and interns should expect to 
                        work Monday-Friday, up to 40 hours per week typically between 8am-5pm. 
                        Specific team norms around working hours will be communicated by your manager. 
                        Interns should not have conflicts such as classes or other employment during the 
                        Amazon work-day.
                        Applicants should have a minimum of one quarter/semester/trimester 
                        remaining in their studies after their internship concludes. Applicants 
                        will be considered for all SDE roles inclusive of the Amazon Propel Program 
                        through this application.
                    </p>
                </div>

                {/* Apply/Contact */}
                <div className={StartupDisplayCardCSS.applyContactDiv}>
                    <button>Apply</button>
                    <button>Contact</button>
                </div>

            </div>
        </div>
    )
}

export default StartupDisplayCard;