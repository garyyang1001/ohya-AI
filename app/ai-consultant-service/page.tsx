import { Metadata } from 'next';
import { content } from './content';

import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';
import SolutionProcess from './components/SolutionProcess';
import ValueDiscoverySection from './components/ValueDiscoverySection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
    title: 'AI導入企業顧問服務 | 好事發生數位',
    description: '不知道如何將 AI 導入企業？我們協助中小企業主釐清需求、規劃架構、並實際建置。從流程診斷到團隊賦能，打造專屬的 AI 轉型藍圖。',
};

export default function AIConsultantPage() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-ink font-serif antialiased paper-texture">
            {/* Hero Section */}
            <HeroSection data={content.hero} />

            {/* Pain Points Section */}
            <PainPoints data={content.painPoints} />

            {/* Solution & Benefits Section */}
            <SolutionProcess solution={content.solution} process={content.process} />

            {/* Value Discovery Section - First Contact Process */}
            <ValueDiscoverySection data={content.valueDiscovery} />

            {/* Pricing Section */}
            <PricingSection data={content.pricing} />

            {/* FAQ Section */}
            <FAQSection data={content.faq} />

            {/* Final CTA Section with Threads Link */}
            <CTASection data={content.hero} />
        </main>
    );
}
