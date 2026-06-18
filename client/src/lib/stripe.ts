/**
 * Stripe-ready donation integration layer.
 *
 * To connect real payments later:
 * 1. Add STRIPE_PUBLISHABLE_KEY to your environment
 * 2. Create a backend endpoint (e.g. POST /api/create-checkout-session)
 * 3. Replace createCheckoutSession with a fetch to that endpoint
 * 4. Redirect using stripe.redirectToCheckout({ sessionId })
 */

export type DonationType = 'one-time' | 'monthly'

export interface DonationPayload {
  amount: number
  type: DonationType
  currency: string
}

export interface CheckoutSessionResponse {
  sessionId: string
  url?: string
}

export async function createCheckoutSession(
  payload: DonationPayload,
): Promise<CheckoutSessionResponse> {
  // TODO: Replace with real API call when backend is ready
  // const res = await fetch('/api/create-checkout-session', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // })
  // return res.json()

  console.log('[Stripe Mock] Creating checkout session:', payload)

  await new Promise((resolve) => setTimeout(resolve, 800))

  return {
    sessionId: `cs_mock_${Date.now()}`,
    url: undefined,
  }
}
