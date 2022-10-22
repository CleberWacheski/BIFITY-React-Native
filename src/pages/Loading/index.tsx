import {
    Container,
    Title,
    AnimationContent,
} from './style'

import Lottie from 'lottie-react-native'
import { useAssets } from '../../hooks/useCoinAPI'
import { Routes } from '../../routes/routes'
import { useState } from 'react'

export const LoadingPage = () => {

    const [isLoading, setIsLoading] = useState(true)

    const { data, isLoading: loadingAPI } = useAssets()

    async function DelayLoading() {
        const delay = await new Promise((resolve, reject) => setTimeout(resolve, 2000)).then(() => true)

        if (!loadingAPI && delay) {
            setIsLoading(false)
        }
    }

    if (!isLoading) {
        return <Routes data={data} />
    }
    else {
        DelayLoading()


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
}