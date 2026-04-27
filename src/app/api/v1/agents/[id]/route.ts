import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateApiKey } from '@/lib/auth'

// GET /api/v1/agents/[id] — Get single agent
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const agent = await prisma.agent.findFirst({
      where: { id, orgId: org.id },
    })

    if (!agent) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({ agent })
  } catch (err) {
    console.error('GET /api/v1/agents/[id] error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PATCH /api/v1/agents/[id] — Update agent status or metadata
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const body = await req.json()
    const { status, description, metadata } = body

    const agent = await prisma.agent.updateMany({
      where: { id, orgId: org.id },
      data: {
        ...(status && { status }),
        ...(description !== undefined && { description }),
        ...(metadata !== undefined && { metadata }),
      },
    })

    if (agent.count === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const updated = await prisma.agent.findUnique({ where: { id } })
    return NextResponse.json({ agent: updated })
  } catch (err) {
    console.error('PATCH /api/v1/agents/[id] error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
