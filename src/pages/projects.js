import InnerPageContainer from "@/components/common/InnerPageContainer";
import FeatureSection from "@/components/home/FeatureSection";
import PageMetaTags from "@/containers/PageMetaTags";
import Card from "../components/common/Card";

export default function Page() {
    return (
      <InnerPageContainer>
            <PageMetaTags url="/projects"/>
            <div className="mt-12">
              <Card 
                name="Project 1" 
                description="Project 1 description" 
                img="Project 1 Image" 
              />
              <Card 
                name="Project 1" 
                description="Project 1 description" 
                img="Project 1 Image" 
              />
              <Card 
                name="Project 1" 
                description="Project 1 description" 
                img="Project 1 Image" 
              />
              <Card 
                name="Project 1" 
                description="Project 1 description" 
                img="Project 1 Image" 
              />
            </div>
            
      </InnerPageContainer>
    )
  }
  