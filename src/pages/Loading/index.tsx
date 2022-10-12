import {
    Container,
    Title,
    AnimationContent,
} from './style'

import Lottie from 'lottie-react-native'

export const LoadingPage = () => {
    return (
        <Container> 


            <Title>
                BITIFY
            </Title>

            <AnimationContent>
                <Lottie

                    source={require('../../../assets/coinAnimation.json')}
                    autoPlay
                    loop
                    style={{
                        width: 300,
                        height: 300
                    }}

                />
            </AnimationContent>



        </Container>
    )
}