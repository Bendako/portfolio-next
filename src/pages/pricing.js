
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PricingPlans from "@/components/common/PricingPlans";
import GenerationStep from "@/components/home/GenerationStep";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
    return (
      <InnerPageContainer>
            <PageMetaTags title="" description={""} url="/pricing"/>
            <GenerationStep />
      </InnerPageContainer>
    )
  }
  