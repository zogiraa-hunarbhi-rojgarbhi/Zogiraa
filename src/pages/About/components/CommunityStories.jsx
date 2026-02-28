import person1 from "../../../assets/test-1.jpg";
import person2 from "../../../assets/pp.png";
import person3 from "../../../assets/test-2.jpg";

const CommunityStories = () => {
    const stories = [
        {
            img: person1,
            text: "ZOGIRAA helped me find a steady job near my village. Now I can support my family without migrating.",
            name: "Ramesh, Electrician",
        },
        {
            img: person2,
            text: "Reliable workforce and easy onboarding—ZOGIRAA has streamlined our factory hiring process.",
            name: "Arun, MSME Owner",
        },
        {
            img: person3,
            text: "I got my first skill certificate through ZOGIRAA. It gave me the confidence to earn better wages.",
            name: "Sunita, Retail Staff",
        }
    ];

    return (
        <section className="community-section">
            <div className="container">
                <div className="section-header">
                    <h2>Community & Stories</h2>
                    <p>Real impact on real lives through our digital labor ecosystem.</p>
                </div>
                <div className="stories-grid">
                    {stories.map((story, index) => (
                        <div className="story-card" key={index}>
                            <div className="story-img">
                                <img src={story.img} alt={story.name} />
                            </div>
                            <p>"{story.text}"</p>
                            <h4>{story.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityStories;
