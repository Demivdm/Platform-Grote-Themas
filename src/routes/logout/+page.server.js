import { redirect } from '@sveltejs/kit';

export const actions = {
	async default({ locals: { supabase } }) {
		await supabase.auth.signOut();
		throw redirect(303, '/');
	}
};
