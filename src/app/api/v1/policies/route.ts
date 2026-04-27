import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateApiKey } from '@/lib/auth'

// POST /api/v1/policies — Create policy
export async function POST(req: NextRequest) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const { name, rules, priority, enabled } = body

    if (!name || !rules || !Array.isArray(rules)) {
      return NextResponse.json({ error: 'name and rules (array) are required' }, { status: 400 })
    }

    const policy = await prisma.policy.create({
      data: {
        orgId: org.id,
        name,
        rules,
        priority: priority ?? 0,
        enabled: enabled !== false,
      },
    })

    return NextResponse.json({ policy }, { status: 201 })
  } catch (err) {
    console.error('POST /api/v1/policies error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// GET /api/v1/policies — List policies
export async function GET(req: NextRequest) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const policies = await prisma.policy.findMany({
      where: { orgId: org.id },
      orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
    })

    return NextResponse.json({ policies })
  } catch (err) {
    console.error('GET /api/v1/policies error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
