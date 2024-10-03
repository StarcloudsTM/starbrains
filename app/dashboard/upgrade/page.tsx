'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 9.99,
    features: ['12 Machine Learing Models', '4 APIs', '10GB Storage', 'Basic Support'],
  },
  {
    name: 'Pro',
    price: 19.99,
    features: ['50 Machine Learing Models', '12+ APIs', '30GB Storage', 'Priority Support'],
  },
]

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName)
    // TODO: Implement Stripe integration here
    console.log(`Selected plan: ${planName}`)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Choose a Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className={selectedPlan === plan.name ? 'border-primary' : ''}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>${plan.price.toFixed(2)} / month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={() => handleSelectPlan(plan.name)}
                variant={selectedPlan === plan.name ? 'default' : 'outline'}
              >
                {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}