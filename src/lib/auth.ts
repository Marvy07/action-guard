import { NextRequest } from 'next/server'
import { prisma } from './prisma'

export async function validateApiKey(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) return null

  const apiKey = authHeader.replace('Bearer ', '').trim()

  const org = await prisma.organization.findUnique({
    where: { apiKey },
  })

  return org ?? null
}

export async function validateAgentKey(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) return null

  const apiKey = authHeader.replace('Bearer ', '').trim()

  const agent = await prisma.agent.findUnique({
    where: { apiKey },
    include: { org: true },
  })

  return agent ?? null
}
