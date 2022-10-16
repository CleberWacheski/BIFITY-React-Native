import axios from 'axios';
import * as AuthSession from 'expo-auth-session';

interface AuthSession {
    type: string;
    params: {
        access_token: string;
    }
}

interface userProps {

    email: string;
    family_name: string;
    given_name: string;
    id: string;
    locale: string;
    name: string;
    picture: string;

}


export async function SignInWithGoogle() {

    const client_id = '319942528306-kclllp2mkv4vcisug6bjtplsdic4ks4a.apps.googleusercontent.com'
    const redirect_uri = 'https://auth.expo.io/@cleberwacheski/bifify'
    const response_type = 'token'
    const scope = encodeURI('profile email')

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`

    try {
        const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthSession

        if (type === 'success') {
            const { data } = await axios.get<userProps>(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
            
            return data
        }
        else {
            throw new Error('Sign In Error')
        }

    }
    catch (err) {
        console.log(err)
    }


}