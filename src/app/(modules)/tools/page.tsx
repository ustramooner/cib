import { Metadata } from 'next'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { ContentSection } from '@/components/layout/ContentSection'
import { GridLayout } from '@/components/layout/GridLayout'
import { 
  WrenchScrewdriverIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  MegaphoneIcon,
  CalculatorIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Tools - CIB',
  description: 'Campaign tools and utilities',
}

const tools = [
  {
    name: 'Email Campaign Builder',
    description: 'Create and send targeted email campaigns',
    icon: EnvelopeIcon,
    color: 'bg-blue-600 hover:bg-blue-700',
    href: '/tools/email',
    category: 'Communication'
  },
  {
    name: 'Phone Bank Manager',
    description: 'Organize and track phone banking efforts',
    icon: PhoneIcon,
    color: 'bg-green-600 hover:bg-green-700',
    href: '/tools/phonebank',
    category: 'Communication'
  },
  {
    name: 'Event Announcements',
    description: 'Broadcast event information to supporters',
    icon: MegaphoneIcon,
    color: 'bg-purple-600 hover:bg-purple-700',
    href: '/tools/announcements',
    category: 'Communication'
  },
  {
    name: 'Donation Calculator',
    description: 'Track and calculate campaign contributions',
    icon: CalculatorIcon,
    color: 'bg-yellow-600 hover:bg-yellow-700',
    href: '/tools/donations',
    category: 'Finance'
  },
  {
    name: 'Form Builder',
    description: 'Create custom forms for data collection',
    icon: DocumentTextIcon,
    color: 'bg-red-600 hover:bg-red-700',
    href: '/tools/forms',
    category: 'Data Collection'
  },
  {
    name: 'Survey Tools',
    description: 'Conduct polls and gather feedback',
    icon: DocumentTextIcon,
    color: 'bg-indigo-600 hover:bg-indigo-700',
    href: '/tools/surveys',
    category: 'Data Collection'
  },
]

const categories = ['All', 'Communication', 'Finance', 'Data Collection']

export default function ToolsPage() {
  const breadcrumbs = [
    { name: 'Tools', current: true }
  ]

  return (
    <BaseLayout
      title="Campaign Tools"
      description="Access tools and utilities for your campaign operations"
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-6">
        {/* Tool Categories */}
        <ContentSection>
          <div className="flex space-x-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  category === 'All'
                    ? 'bg-blue-100 text-blue-700 border-blue-300'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                } border`}
              >
                {category}
              </button>
            ))}
          </div>
        </ContentSection>

        {/* Tools Grid */}
        <GridLayout columns={3} gap="md">
          {tools.map((tool) => (
            <ContentSection
              key={tool.name}
              padding="lg"
              className="hover:shadow-md transition-shadow cursor-pointer group"
            >
              <a href={tool.href} className="block">
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-lg ${tool.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <tool.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {tool.category}
                  </span>
                </div>
              </a>
            </ContentSection>
          ))}
        </GridLayout>

        {/* Quick Stats */}
        <ContentSection title="Tool Usage Statistics">
          <GridLayout columns={4} gap="md">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Emails Sent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-600">Phone Calls Made</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">Forms Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Active Surveys</div>
            </div>
          </GridLayout>
        </ContentSection>
      </div>
    </BaseLayout>
  )
} 