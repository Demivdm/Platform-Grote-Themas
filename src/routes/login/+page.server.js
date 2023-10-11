import { AuthApiError } from '@supabase/supabase-js'
import { fail, redirect } from '@sveltejs/kit'

export const actions = {
	'send-magiclink': async ({ request, url, locals: { supabase } }) => {
		const formData = await request.formData()
		const email = formData.get('email')?.toString()

		if (!email) {
			return fail(500, {
				createMagicLink: {
					error: 'Please enter your email'
				}
			})
		}

		const { error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				emailRedirectTo: `${url.origin}/api/auth/callback`
			}
		})

		if (!error) {
			return fail(500, {
				createMagicLink: {
					values: {
						email
					},
					error: 'Could not send magiclink'
				}
			})
		}

		return {
			createMagicLink: {
				success: true
			}
		}
	}
}
