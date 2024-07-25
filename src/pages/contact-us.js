import InnerPageContainer from "@/components/common/InnerPageContainer";
import FeatureSection from "@/components/home/FeatureSection";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
    return (
      <InnerPageContainer>
            <PageMetaTags url="/contact-us"/>
            <div className="mt-12">
              <FeatureSection title="Project 1" />
              <FeatureSection title="Project 2" leftText="2" />
              <FeatureSection title="Project 3" leftText="2" />

            </div>
            
      </InnerPageContainer>
    )
  }
  