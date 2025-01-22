// Experience.js
export const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <h2 className="experience-title">Experience</h2>
                
                <div className="experience-cards">
                    {/* Education Experience */}
                    <div className="experience-card">
                        <div className="experience-card-header">
                            <h4 className="experience-card-title">Software Engineering Student</h4>
                            <span className="experience-date">2022 - Present</span>
                        </div>
                        <p className="experience-description">
                            Currently pursuing a Bachelor of Engineering in Software Engineering at the University of Westminster. 
                            I have completed courses in programming, data structures, algorithms,Machine Learning and software engineering. 
                            I have also completed a course in web development and have experience in developing web applications 
                            using HTML, CSS, and JavaScript.
                        </p>
                    </div>

                    {/* Internship Experience */}
                    <div className="experience-card">
                        <div className="experience-card-header">
                            <h4 className="experience-card-title">Software Engineering Intern</h4>
                            <span className="experience-date">2024 Jun - 2024 Dec</span>
                        </div>
                        <div className="experience-company">
                            <span>Verdentra</span>
                        </div>
                        <p className="experience-description">
                            Contributed to the Snowflake Migration Project, where I migrated reports from on-premises 
                            databases to Snowflake cloud storage solutions and refactored SQL stored procedures using 
                            Snowflake, SQL, and .NET technologies.
                            <br/>
                            Time Management System: Built the frontend using React, integrated it with a .NET backend, and utilized Power BI for data analysis and visualization.
                            <br/>
                            Marketplace Web Application: Designed and developed a responsive, user-friendly marketplace application frontend using React and Figma.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};