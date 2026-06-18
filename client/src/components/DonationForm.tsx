import { useState, type FormEvent } from 'react'
import type { DonationType } from '../lib/stripe'
import { createCheckoutSession } from '../lib/stripe'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Card } from './ui/Card'

const PRESET_AMOUNTS = [10, 25, 50, 100]

export function DonationForm() {
  const [donationType, setDonationType] = useState<DonationType>('one-time')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25)
  const [customAmount, setCustomAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const resolvedAmount = customAmount
    ? parseFloat(customAmount)
    : selectedAmount

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
    setError('')
  }

  const handleCustomChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
    setError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!resolvedAmount || resolvedAmount < 1) {
      setError('Please enter a donation amount of at least $1.')
      return
    }

    setLoading(true)

    try {
      const session = await createCheckoutSession({
        amount: resolvedAmount,
        type: donationType,
        currency: 'usd',
      })

      setSuccess(true)
      console.log('Checkout session created:', session.sessionId)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto max-w-lg">
      <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white font-bold text-sm">
          $
        </div>
        <div>
          <h2 className="text-xl font-bold">Make a Donation</h2>
          <p className="text-sm text-slate-500">Secure payment powered by Stripe</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-medium text-slate-700">Donation type</p>
          <div className="grid grid-cols-2 gap-3">
            {(['one-time', 'monthly'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setDonationType(type)}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                  donationType === type
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-slate-200 text-slate-600 hover:border-brand-200'
                }`}
              >
                {type === 'one-time' ? 'One-time' : 'Monthly'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-slate-700">Select amount</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handlePresetClick(amount)}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                  selectedAmount === amount && !customAmount
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-slate-200 text-slate-600 hover:border-brand-200'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        <Input
          label="Custom amount ($)"
          type="number"
          min="1"
          step="0.01"
          placeholder="Enter custom amount"
          value={customAmount}
          onChange={(e) => handleCustomChange(e.target.value)}
        />

        {resolvedAmount && resolvedAmount >= 1 && (
          <div className="rounded-xl bg-brand-50 px-4 py-3 text-center">
            <p className="text-sm text-slate-600">
              Your {donationType === 'monthly' ? 'monthly ' : ''}donation
            </p>
            <p className="font-display text-3xl font-bold text-brand-700">
              ${resolvedAmount.toFixed(2)}
              {donationType === 'monthly' && (
                <span className="text-base font-normal text-slate-500">/mo</span>
              )}
            </p>
          </div>
        )}

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
        )}

        {success && (
          <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            Thank you! In production, you would be redirected to Stripe Checkout.
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Processing…
            </span>
          ) : (
            'Donate Now'
          )}
        </Button>

        <p className="text-center text-xs text-slate-400">
          🔒 Demo mode — no real charges. Stripe integration ready in{' '}
          <code className="rounded bg-slate-100 px-1">src/lib/stripe.ts</code>
        </p>
      </form>
    </Card>
  )
}
