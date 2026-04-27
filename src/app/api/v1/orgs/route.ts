import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { randomBytes } from 'crypto'

function generateApiKey() {
  return 'ag_org_' + randomBytes(32).toString('hex')
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// POST /api/v1/orgs — Create a new organization
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, plan } = body

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'name is required' }, { status: 400 })
    }

    const baseSlug = slugify(name)
    let slug = baseSlug
    let suffix = 0

    // Ensure unique slug
    while (await prisma.organization.findUnique({ where: { slug } })) {
      suffix++
      slug = `${baseSlug}-${suffix}`
    }

    const org = await prisma.organization.create({
      data: {
        name,
        slug,
        apiKey: generateApiKey(),
        plan: plan ?? 'free',
      },
    })

    return NextResponse.json({
      id: org.id,
      name: org.name,
      slug: org.slug,
      apiKey: org.apiKey,
      plan: org.plan,
      createdAt: org.createdAt,
    }, { status: 201 })
  } catch (err) {
    console.error('POST /api/v1/orgs error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// GET /api/v1/orgs — List all orgs (admin use)
export async function GET() {
  try {
    const orgs = await prisma.organization.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        plan: true,
        createdAt: true,
        _count: { select: { agents: true, actionRequests: true } },
      },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ orgs })
  } catch (err) {
    console.error('GET /api/v1/orgs error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
