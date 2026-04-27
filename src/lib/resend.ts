import { Resend } from 'resend'
export const getResendClient = () => new Resend(process.env.RESEND_API_KEY)
export const getReportEmailFromAddress = () => process.env.RESEND_FROM_EMAIL ?? 'alerts@actionguard.io'
