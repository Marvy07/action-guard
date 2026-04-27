import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateApiKey } from '@/lib/auth'

// GET /api/v1/audit/events — Query immutable audit log (filterable, paginated)
export async function GET(req: NextRequest) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { searchParams } = new URL(req.url)
    const traceId = searchParams.get('traceId')
    const entityType = searchParams.get('entityType')
    const eventType = searchParams.get('eventType')
    const actorId = searchParams.get('actorId')
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '50'), 200)
    const offset = parseInt(searchParams.get('offset') ?? '0')

    const where = {
      orgId: org.id,
      ...(traceId && { traceId }),
      ...(entityType && { entityType }),
      ...(eventType && { eventType }),
      ...(actorId && { actorId }),
    }

    const [events, total] = await Promise.all([
      prisma.auditEvent.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.auditEvent.count({ where }),
    ])

    return NextResponse.json({ events, total, limit, offset })
  } catch (err) {
    console.error('GET /api/v1/audit/events error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
