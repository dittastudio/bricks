import mailchimp from '@mailchimp/mailchimp_marketing'
import { z } from 'zod'
import type { HandlerEvent } from '@netlify/functions'

interface Fields {
  fname: string
  lname: string
  email: string
}

export const handler = async (event: HandlerEvent) => {
  const { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER } = process.env

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: '.env vars are not defined',
        error: true,
      }),
    }
  }

  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER,
  })

  const listId = MAILCHIMP_LIST_ID

  try {
    const data = JSON.parse(event.body ?? '{}') as Fields

    const validationSchema = z.object({
      fname: z.string().trim().min(1, 'Please provide your first name').default(''),
      lname: z.string().trim().min(1, 'Please provide your last name').default(''),
      email: z
        .string()
        .trim()
        .min(1, 'Please provide your email')
        .email({ message: 'Email address must be valid' })
        .default(''),
    })

    const validation = validationSchema.safeParse(data)

    if (!validation.success) {
      return {
        statusCode: 422,
        body: JSON.stringify({
          message: 'Please check the form and try again.',
          error: true,
          errors: validation.error.errors,
        }),
      }
    }

    const response = await mailchimp.lists.addListMember(listId, {
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.fname,
        LNAME: data.lname,
      },
    })

    if (response?.status === 'subscribed') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Thank you! Your subscription to our list has been confirmed.',
          error: false,
        }),
      }
    }

    throw new Error('Unable to subscribe you to our newsletter. Please try again.')
  }
  catch (error: any) {
    const response = error?.response?.text ? JSON.parse(error.response.text) : null

    return {
      statusCode: error?.response?.status ?? 500,
      body: JSON.stringify({
        message: 'An unexpected error occurred while trying to subscribe you to our newsletter. Please try again.',
        error: true,
        response,
      }),
    }
  }
}
