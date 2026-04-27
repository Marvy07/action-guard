import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateApiKey } from '@/lib/auth'
import { randomBytes } from 'crypto'

function generateAgentKey() {
  return 'ag_agent_' + randomBytes(32).toString('hex')
}

// POST /api/v1/agents — Register a new agent
export async function POST(req: NextRequest) {
  try {
    const org = await validateApiKey(req)
    if (!org) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { name, description, metadata } = body

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'name is required' }, { status: 400 })
    }

    const agent = await prisma.agent.create({
      data: {
        orgId: org.id,
        name,
        description: description ?? null,
        apiKey: generateAgentKey(),
        status: 'active',
        metadata: metadata ?? null,
      },
    })

    return NextResponse.json({
      id: agent.id,
      name: agent.name,
      description: agent.description,
      apiKey: agent.apiKey,
      status: agent.status,
      createdAt: agent.createdAt,
    }, { status: 201 })
  } catch (err) {
    console.error('POST /api/v1/agents error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// GET /api/v1/agents — List agents for this org
export async function GET(req: NextRequest) {
  try {
    const org = await validateApiKey(req)
    if (!org) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const agents = await prisma.agent.findMany({
      where: { orgId: org.id },
      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        createdAt: true,
        _count: { select: { actionRequests: true } },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ agents })
  } catch (err) {
    console.error('GET /api/v1/agents error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
