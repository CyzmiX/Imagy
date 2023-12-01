import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabaseClient';


export const POST: RequestHandler = async ({ request }) => {
	const { email, password, type } = await request.json();

    if (type === 'posts') {
        const { data }  = await supabase.from("posts").select();
        return json({
            posts: data,
        });
    } else if (type !==  "login") {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })   
        return json({
            data,
            error
        });

    } else {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })   
        return json({
            data,
            error
        });
    }
}
