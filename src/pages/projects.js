import InnerPageContainer from "@/components/common/InnerPageContainer";
import FeatureSection from "@/components/home/FeatureSection";
import PageMetaTags from "@/containers/PageMetaTags";
import Card from "../components/common/Card";
import mixed from "../../public/mixed.jpg"

export default function Page() {
    return (
      <InnerPageContainer>
            <PageMetaTags url="/projects"/>
            <div className="mt-12">
              <Card 
                name="Project 1" 
                description="Project 1 description" 
                img={mixed}
                
              />
              <Card 
                name="Project 1" 
                description="Project 1 description" 
                img={mixed}
              />
              <Card 
                name="Project 1" 
                description="Project 1 description" 
                img={mixed}
              />
              <Card 
                name="Project 1" 
                description="Project 1 description" 
                img={mixed}
              />
            </div>
            
      </InnerPageContainer>
    )
  }
  