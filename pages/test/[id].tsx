
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
export default function Test({id}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (<h1>Test {id}</h1>);
}

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        }],
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    return {
        props: {id: params?.id }
    }
}
