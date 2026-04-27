export interface RefundRequest {
  customerId: string
  orderId: string
  amount: number
  currency?: string
  reason?: string
}

export interface RefundResult {
  success: boolean
  refundId: string
  amount: number
  currency: string
  processedAt: string
  error?: string
}

export async function executeMockRefund(request: RefundRequest): Promise<RefundResult> {
  await new Promise(resolve => setTimeout(resolve, 150))
  if (request.amount <= 0) {
    return { success: false, refundId: '', amount: request.amount, currency: request.currency ?? 'USD', processedAt: new Date().toISOString(), error: 'Amount must be greater than 0' }
  }
  return { success: true, refundId: `rfnd_mock_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, amount: request.amount, currency: request.currency ?? 'USD', processedAt: new Date().toISOString() }
}
