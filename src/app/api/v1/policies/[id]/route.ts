import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateApiKey } from '@/lib/auth'

// GET /api/v1/policies/[id]
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await params
    const policy = await prisma.policy.findFirst({ where: { id, orgId: org.id } })
    if (!policy) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ policy })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PATCH /api/v1/policies/[id]
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await params
    const body = await req.json()
    const { name, rules, priority, enabled } = body

    const result = await prisma.policy.updateMany({
      where: { id, orgId: org.id },
      data: {
        ...(name !== undefined && { name }),
        ...(rules !== undefined && { rules }),
        ...(priority !== undefined && { priority }),
        ...(enabled !== undefined && { enabled }),
      },
    })

    if (result.count === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    const updated = await prisma.policy.findUnique({ where: { id } })
    return NextResponse.json({ policy: updated })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/v1/policies/[id]
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const { id } = await params
    const result = await prisma.policy.deleteMany({ where: { id, orgId: org.id } })
    if (result.count === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ message: 'Policy deleted' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
